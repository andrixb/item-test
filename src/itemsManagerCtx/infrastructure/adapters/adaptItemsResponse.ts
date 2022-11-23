import { IItem, Item } from '../../domain/entities';
import { ItemsResponsePayload } from '../interfaces';

export const adaptItemsResponse = ({ data }: ItemsResponsePayload) => {
    return { items: data?.items?.map((item: IItem) => new Item(item)) }
};
