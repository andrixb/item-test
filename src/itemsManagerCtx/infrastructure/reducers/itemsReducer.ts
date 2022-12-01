import { GET_ITEMS, ItemsActionTypes } from '../actions';
import { ItemsState } from '../interfaces';

export const itemsInitialState: ItemsState = {
    items: [],
};

export const itemsReducer = (state: ItemsState, action: ItemsActionTypes) => {
    const { type, payload } = action;
    console.log('reducer called');
    switch (type) {
        case GET_ITEMS:
            console.log('GET_ITEMS', action, state);
            return {
                ...state,
                items: payload.items,
            };

        default:
            // throw new Error(`Unsupported action type: ${type}`);
            console.log('DEFAULT', action, state);
            return state;
    }
};
