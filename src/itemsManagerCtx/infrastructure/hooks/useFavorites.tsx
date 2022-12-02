import React, { useCallback, useContext } from 'react';
import { ItemType } from '../../domain/entities';
import { ADD_FAVORITE, ItemsActionTypes, REMOVE_FAVORITE } from '../actions';
import { ItemContext } from '../contexts';
import { ItemsState } from '../interfaces';

export const useFavorites = () => {
    const context = useContext(ItemContext);

    if (!context) {
        throw new Error(`useFavorites must be used within a ItemProvider`);
    }

    const [state, dispatch] = context;

    const findItem = (id: string, itemState: ItemsState) => itemState.items.find((item: ItemType) => item.id === id);
    const findFavorites = (id: string, itemState: ItemsState) =>
        itemState.favorites.find((item: ItemType) => item.id === id);
    const removedItems = (id: string, itemState: ItemsState) =>
        itemState.items.filter((item: ItemType) => item.id !== id);

    const handleFavs = useCallback(
        (e: React.SyntheticEvent) => {
            const itemId = e.currentTarget.id ? e.currentTarget.id : '';
            if (typeof state === 'object' && typeof dispatch === 'function') {
                const existsInFavs = findFavorites(itemId, state);

                if (!existsInFavs) {
                    const itemToAdd = findItem(itemId, state);
                    if (itemToAdd) {
                        addToFavs(itemToAdd, state, dispatch);
                    }
                }

                if (existsInFavs) {
                    removeFromFavs(itemId, state, dispatch);
                }
            }
        },
        [state]
    );

    const addToFavs = (itemToAdd: ItemType, itemsState: ItemsState, dispatch: (value: ItemsActionTypes) => void) => {
        // add useCase to connect to api for persistent storing
        const payload = { favorites: [...itemsState.favorites, itemToAdd] };
        dispatch({ type: ADD_FAVORITE, payload });
    };

    const removeFromFavs = (itemId: string, itemsState: ItemsState, dispatch: (value: ItemsActionTypes) => void) => {
        const cleanedFavorites = removedItems(itemId, itemsState);

        if (cleanedFavorites) {
            // add useCase to connect to api for persistent storing
            const payload = { favorites: cleanedFavorites };
            dispatch({ type: REMOVE_FAVORITE, payload });
        }
    };

    return {
        favorites: typeof state === 'object' ? state.favorites : [],
        handleFavs,
    };
};
