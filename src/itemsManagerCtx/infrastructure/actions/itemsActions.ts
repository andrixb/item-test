import { ItemType } from "../../domain/entities";

export const GET_ITEMS = 'GET_ITEMS';

export interface GetItemsAction {
    type: typeof GET_ITEMS;
    payload: { items: ItemType[] };
}

export type ItemsActionTypes = 
    | GetItemsAction;
    