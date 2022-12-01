import { GET_ITEMS, ItemsActionTypes, SORT_BY_DESCRIPTION, SORT_BY_EMAIL, SORT_BY_PRICE, SORT_BY_TITLE } from '../actions';
import { ItemsState } from '../interfaces';

export const itemsInitialState: ItemsState = {
    items: [],
};

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

        default:
            throw new Error(`Unsupported action type: ${type}`);
    }
};
