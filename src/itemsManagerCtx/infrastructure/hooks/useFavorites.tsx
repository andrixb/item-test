import React, { useCallback, useContext, useEffect } from 'react';
import { ItemType } from '../../domain/entities';
import { ADD_FAVORITE, GET_FAVORITES, ItemsActionTypes, REMOVE_FAVORITE, UPDATE_ITEMS_FAVORITES } from '../actions';
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
    const updateItemsList = (updatedItem: ItemType, itemsState: ItemsState) => {
        const index = itemsState.items.indexOf(updatedItem);
        itemsState.items[index] = updatedItem;
        return itemsState;
    };

    const addToFavorites = (
        itemToAdd: ItemType,
        itemsState: ItemsState,
        dispatch: (value: ItemsActionTypes) => void
    ) => {
        itemToAdd.isFavorite = true;
        const payload = { favorites: [...itemsState.favorites, itemToAdd] };
        const updatedItemsList = updateItemsList(itemToAdd, itemsState);
        // here should be available an EP for storing favorites
        localStorage.setItem('favorites', JSON.stringify(payload));
        dispatch({ type: ADD_FAVORITE, payload });
        dispatch({ type: UPDATE_ITEMS_FAVORITES, payload: { items: updatedItemsList.items } });
    };

    const removeFromFavorites = useCallback(
        (itemId: string, itemsState: ItemsState, dispatch: (value: ItemsActionTypes) => void) => {
            const cleanedFavorites = removedItems(itemId, itemsState);
            const itemToRemove = findItem(itemId, itemsState);
            if (cleanedFavorites && itemToRemove) {
                itemToRemove.isFavorite = false;
                const payload = { favorites: cleanedFavorites };
                const updatedItemsList = updateItemsList(itemToRemove, itemsState);
                // here should be available an EP for storing favorites
                localStorage.setItem('favorites', JSON.stringify(payload));
                dispatch({ type: REMOVE_FAVORITE, payload });
                dispatch({ type: UPDATE_ITEMS_FAVORITES, payload: { items: updatedItemsList.items } });
            }
        },
        []
    );

    const getFavorites = useCallback(() => {
        const storeFavorites = localStorage.getItem('favorites');

        if (storeFavorites && typeof dispatch === 'function') {
            const payload = JSON.parse(storeFavorites);
            dispatch({ type: GET_FAVORITES, payload });
        }
    }, [dispatch]);

    const handleFavorites = useCallback(
        (e: React.SyntheticEvent) => {
            const itemId = e.currentTarget.id ? e.currentTarget.id : '';
            if (typeof state === 'object' && typeof dispatch === 'function') {
                const existsInFavorites = findFavorites(itemId, state);
                if (!existsInFavorites) {
                    const itemToAdd = findItem(itemId, state);
                    if (itemToAdd) {
                        addToFavorites(itemToAdd, state, dispatch);
                    }
                }
                if (existsInFavorites) {
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
