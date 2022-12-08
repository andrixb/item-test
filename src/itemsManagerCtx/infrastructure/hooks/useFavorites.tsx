import React, { useCallback, useContext, useEffect } from 'react';
import { ItemType } from '../../domain/entities';
import { ADD_FAVORITE, GET_FAVORITES, ItemsActionTypes, REMOVE_FAVORITE } from '../actions';
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

    const addToFavorites = (
        itemToAdd: ItemType,
        itemsState: ItemsState,
        dispatch: (value: ItemsActionTypes) => void
    ) => {
        const payload = { favorites: [...itemsState.favorites, itemToAdd] };

        // here should be available an EP for storing favorites
        localStorage.setItem('items', JSON.stringify(payload));

        dispatch({ type: ADD_FAVORITE, payload });
    };

    const removeFromFavorites = useCallback((
        itemId: string,
        itemsState: ItemsState,
        dispatch: (value: ItemsActionTypes) => void
    ) => {
        const cleanedFavorites = removedItems(itemId, itemsState);

        if (cleanedFavorites) {
            const payload = { favorites: cleanedFavorites };

            // here should be available an EP for storing favorites
            localStorage.setItem('items', JSON.stringify(payload));

            dispatch({ type: REMOVE_FAVORITE, payload });
        }
    }, []);

    const getFavorites = useCallback(() => {
        const storeFavorites = localStorage.getItem('items');

        if (storeFavorites && typeof dispatch === 'function') {
            const payload = JSON.parse(storeFavorites);
            dispatch({ type: GET_FAVORITES, payload });
        }
    }, [dispatch]);

    const handleFavorites = useCallback(
        (e: React.SyntheticEvent) => {
            const itemId = e.currentTarget.id ? e.currentTarget.id : '';
            if (typeof state === 'object' && typeof dispatch === 'function') {
                const existsInFavs = findFavorites(itemId, state);

                if (!existsInFavs) {
                    const itemToAdd = findItem(itemId, state);
                    if (itemToAdd) {
                        addToFavorites(itemToAdd, state, dispatch);
                    }
                }

                if (existsInFavs) {
                    removeFromFavorites(itemId, state, dispatch);
                }
            }
        },
        [state, dispatch, removeFromFavorites]
    );


    return {
        favorites: typeof state === 'object' ? state.favorites : [],
        handleFavorites,
        getFavorites,
    };
};
