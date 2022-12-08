import { IItem, Item } from '../../domain/entities';
import { ItemsResponsePayload } from '../interfaces';

export const adaptItemsResponse = ({ data }: ItemsResponsePayload) => {
    try {
        return { items: data?.items?.map((item: IItem) => new Item(item)) };
    } catch(e) {
        throw new Error(`Error: ${e}`);
    }
};
