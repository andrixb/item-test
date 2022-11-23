import axios from 'axios';
import { IItem } from '../../src/itemsManagerCtx/domain/entities';
import { ISearchParams, ItemsExternalResponsePayload } from '../../src/itemsManagerCtx/infrastructure/interfaces';

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

export default async function handler(req: any, res: any) {
    try {
        const PUBLIC_API = process.env.NEXT_PUBLIC_API_FULL;
        const { email, title, description, price } = req.query;
        const { data } = await axios.get<ItemsExternalResponsePayload>(`${PUBLIC_API}/items.json`);
        const filteredData = filterItems({ email, title, description, price }, data);
        res.status(200).json({ filteredData });
    } catch (error) {
        res.status(500);
        throw new Error(`${error}`);
    }
}
