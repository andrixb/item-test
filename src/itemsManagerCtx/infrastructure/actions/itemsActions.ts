import { ItemType } from '../../domain/entities';

export const GET_ITEMS = 'GET_ITEMS';
export const SORT_BY_TITLE = 'SORT_BY_TITLE';
export const SORT_BY_DESCRIPTION = 'SORT_BY_DESCRIPTION';
export const SORT_BY_EMAIL = 'SORT_BY_EMAIL';
export const SORT_BY_PRICE = 'SORT_BY_PRICE';
export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
export const GET_FAVORITES = 'GET_FAVORITES';

export interface GetItemsAction {
    type: typeof GET_ITEMS;
    payload: { items: ItemType[] };
}

export interface SortByTitleItemsAction {
    type: typeof SORT_BY_TITLE;
    payload: { items: ItemType[] };
}

export interface SortByDescriptionItemsAction {
    type: typeof SORT_BY_DESCRIPTION;
    payload: { items: ItemType[] };
}

export interface SortByEmailItemsAction {
    type: typeof SORT_BY_EMAIL;
    payload: { items: ItemType[] };
}

export interface SortByPriceItemsAction {
    type: typeof SORT_BY_PRICE;
    payload: { items: ItemType[] };
}

export interface GetFavoritesAction {
    type: typeof GET_FAVORITES;
    payload: { favorites: ItemType[] };
}

export interface AddToFavoritesAction {
    type: typeof ADD_FAVORITE;
    payload: { favorites: ItemType[] };
}

export interface RemoveFromFavoritesAction {
    type: typeof REMOVE_FAVORITE;
    payload: { favorites: ItemType[] };
}

export type ItemsActionTypes =
    | GetItemsAction
    | SortByTitleItemsAction
    | SortByDescriptionItemsAction
    | SortByEmailItemsAction
    | SortByPriceItemsAction
    | GetFavoritesAction
    | AddToFavoritesAction
    | RemoveFromFavoritesAction;
