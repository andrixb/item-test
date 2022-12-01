import {
    ADD_FAVORITE,
    GET_FAVORITES,
    REMOVE_FAVORITE,
    ItemsActionTypes,
} from '../actions';
import { ItemsState } from '../interfaces';


export const favoritesReducer = (state: ItemsState, action: ItemsActionTypes) => {
    const { type, payload } = action;
    switch (type) {
        case GET_FAVORITES:
            return {
                ...state,
                favorites: payload.favorites,
            };
        case ADD_FAVORITE:
            return {
                ...state,
                favorites: payload.favorites,
            };
        case REMOVE_FAVORITE:
            return {
                ...state,
                favorites: payload.favorites,
            };

        default:
            return state;
    }
};
