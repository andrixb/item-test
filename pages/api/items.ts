import axios from 'axios';
import { v4 as uuid } from 'uuid';
import { NextApiRequest, NextApiResponse } from 'next';
import { IItem, Item } from '../../src/itemsManagerCtx/domain/entities';
import { ISearchParams } from '../../src/itemsManagerCtx/infrastructure/interfaces';
import { ItemsExternalResponsePayload } from '../../src/shared/infrastructure/interfaces';
import { createRedisInstance } from '../../src/shared/infrastructure/redis';

const listWithIds = (data: ItemsExternalResponsePayload) => data.items?.map((item: IItem) => new Item(item));

const adaptList = (data: ItemsExternalResponsePayload) => {
    const items = listWithIds(data);
    return { items };
};

const filterItems = ({ email, title, description, price }: ISearchParams, data: ItemsExternalResponsePayload) => {
    return {
        items: data.items?.filter(
            (item: IItem) =>
                item.title?.toLowerCase().includes(title?.toLowerCase() ?? '') &&
                item.email?.toLowerCase().includes(email?.toLowerCase() ?? '') &&
                item.description?.toLowerCase().includes(description?.toLowerCase() ?? '') &&
                item.price?.toLowerCase().includes(price?.toLowerCase() ?? '')
        ),
    };
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (req.method === 'GET') {
            const PUBLIC_API = process.env.NEXT_PUBLIC_API_FULL;
            const key = uuid();
            const redis = createRedisInstance();
            const cachedList = await redis.get(key);

            if (cachedList) {
                return res.status(200).json({ cachedList });
            }

            const { email, title, description, price } = req.query as ISearchParams;
            const response = await axios.get<ItemsExternalResponsePayload>(`${PUBLIC_API}/items.json`);

            /** We'd need to get a response with ids.
             *  For now we adapt the received data and with add ids.
             *  Here we'd need to implement a cache (or have a DB) to get data consistent and persistent */
           

            // cache data setting an expiry of 1 hour
            // this means that the cached data will remain alive for 60 minutes
            // after that, we'll get fresh data from the DB
            const MAX_AGE = 60_000 * 60; // 1 hour
            const EXPIRY_MS = `PX`; // milliseconds

            // cache data
            const adaptedList = adaptList(response.data);
            await redis.set(key, JSON.stringify(adaptedList), EXPIRY_MS, MAX_AGE);

            // return data to client
            const data = filterItems({ email, title, description, price }, adaptedList);
            res.status(200).json({ data });
        }
    } catch (error) {
        res.status(500);
        throw new Error(`${error}`);
    }
}
