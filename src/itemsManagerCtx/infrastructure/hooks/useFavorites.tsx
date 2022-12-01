import React, { useContext } from 'react';
import { ItemType } from '../../domain/entities';
import { ADD_FAVORITE, REMOVE_FAVORITE } from '../actions';
import { ItemContext } from '../contexts';
import { ItemsState } from '../interfaces';

export const useFavorites = () => {
    const context = useContext(ItemContext);

    if (!context) {
        throw new Error(`useFavorites must be used within a ItemProvider`);
    }

    const [state, dispatch] = context;

    const findItem = (id: string, itemState: ItemsState) => itemState.items.find((item: ItemType) => item.id === id);
    const findIndex = (id: string, itemsState: ItemsState) =>
        itemsState.favorites.findIndex((favorite: ItemType) => favorite.id === id);

    const handleAddToFavs = (e: React.SyntheticEvent) => {
        const itemId = e.currentTarget.id ? e.currentTarget.id : '';

        if (typeof state === 'object' && typeof dispatch === 'function') {
            const foundItem = findItem(itemId, state);

            if (foundItem && foundItem.isFavorite === false) {
                foundItem.isFavorite = true;
                const payload = { favorites: [...state.favorites, foundItem] };
                dispatch({ type: ADD_FAVORITE, payload });
                return;
            }

            // if isFavorite element already exists in the list.
            if (foundItem && foundItem.isFavorite === true) {
                const index = findIndex(itemId, state);
                foundItem.isFavorite = false;
                const payload = { favorites: [...state.favorites.splice(index, 1)] };
                dispatch({ type: REMOVE_FAVORITE, payload });
                return;
            }
        }
    };

    return {
        favorites: typeof state === 'object' ? state.favorites : [],
        handleAddToFavs,
    };
};
