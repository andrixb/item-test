import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import { IItem, Item } from '../../src/itemsManagerCtx/domain/entities';
import { ISearchParams } from '../../src/itemsManagerCtx/infrastructure/interfaces';
import { ItemsExternalResponsePayload } from '../../src/shared/infrastructure/interfaces';

const adaptList = (data: ItemsExternalResponsePayload) => ({ items: data.items?.map((item: IItem) => new Item(item)) });

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

            const { email, title, description, price } = req.query as ISearchParams;
            const response = await axios.get<ItemsExternalResponsePayload>(`${PUBLIC_API}/items.json`);

            /** We'd need to get a response with ids.
             *  For now we adapt the received data and with add ids.
             *  Here we'd need to implement a cache (or have a DB) to get data consistent and persistent */
            const adaptedList = adaptList(response.data);
            const data = filterItems({ email, title, description, price }, adaptedList);
            res.status(200).json({ data });
        }
    } catch (error) {
        res.status(500);
        throw new Error(`${error}`);
    }
}
