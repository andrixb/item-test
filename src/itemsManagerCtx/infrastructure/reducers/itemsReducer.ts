import {
    GET_ITEMS,
    ItemsActionTypes,
    SORT_BY_DESCRIPTION,
    SORT_BY_EMAIL,
    SORT_BY_PRICE,
    SORT_BY_TITLE,
    ADD_FAVORITE,
    GET_FAVORITES,
    REMOVE_FAVORITE,
} from '../actions';
import { ItemsState } from '../interfaces';

export const itemsReducer = (state: ItemsState, action: ItemsActionTypes) => {
    const { type, payload } = action;
    switch (type) {
        case GET_ITEMS:
            return {
                ...state,
                items: payload.items,
            };
        case SORT_BY_TITLE:
            return {
                ...state,
                items: payload.items,
            };
        case SORT_BY_EMAIL:
            return {
                ...state,
                items: payload.items,
            };
        case SORT_BY_PRICE:
            return {
                ...state,
                items: payload.items,
            };
        case SORT_BY_DESCRIPTION:
            return {
                ...state,
                items: payload.items,
            };
        case GET_FAVORITES:
            return {
                ...state,
                favorites: payload.favorites,
            };
        case ADD_FAVORITE:
            console.log('ADD');
            return {
                ...state,
                favorites: payload.favorites,
            };
        case REMOVE_FAVORITE:
            console.log('REMVe');
            return {
                ...state,
                favorites: payload.favorites,
            };

        default:
            throw new Error(`Unsupported action type: ${type}`);
    }
};