import { GET_ITEMS, ItemsActionTypes } from '../actions';
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

        default:
            throw new Error(`Unsupported action type: ${type}`);
    }
};
