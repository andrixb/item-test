import React, { useCallback, useContext, useState } from 'react';
import { ItemType } from '../../domain/entities';
import {
    ADD_FAVORITE,
    GET_FAVORITES,
    ItemsActionTypes,
    REMOVE_FAVORITE,
    SEARCH_FAVORITES,
    UPDATE_ITEMS_FAVORITES,
} from '../actions';
import { ItemContext } from '../contexts';
import { ItemsState } from '../interfaces';

export const useFavorites = () => {
    const context = useContext(ItemContext);
    if (!context) {
        throw new Error(`useFavorites must be used within a ItemProvider`);
    }

    const [state, dispatch] = context;
    const [title, setTitle] = useState<string>('');
    const onChangeTitleFavorites = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void =>
        setTitle(e.currentTarget.value);

    const handleSearchFavorites = (event: React.SyntheticEvent) => {
        event.preventDefault();

        if (typeof state === 'object' && typeof dispatch === 'function') {
            // this should be done against an EP
            const foundFavorites = state.items?.filter((item: ItemType) =>
                item.title?.toLowerCase().includes(title?.toLowerCase() ?? '')
            );
            dispatch({ type: SEARCH_FAVORITES, payload: { favorites: foundFavorites } });
        }
    };

    const handleClearSearchFavorites = (event: React.SyntheticEvent) => getFavorites();

    const findItem = (id: string, itemState: ItemsState) => itemState.items.find((item: ItemType) => item.id === id);
    const findFavorites = (id: string, itemState: ItemsState) =>
        itemState.favorites?.find((item: ItemType) => item.id === id);
    const removedFavorites = (id: string, itemState: ItemsState) =>
        itemState.favorites?.filter((item: ItemType) => item.id !== id);
    const updateItemsList = (updatedItem: ItemType, itemsState: ItemsState) => {
        const index = itemsState.items?.indexOf(updatedItem);
        itemsState.items[index] = updatedItem;
        return itemsState;
    };

    const addToFavorites = useCallback(
        (itemToAdd: ItemType, itemsState: ItemsState, dispatch: (value: ItemsActionTypes) => void) => {
            itemToAdd.isFavorite = true;
            const payload = { favorites: [...itemsState.favorites, itemToAdd] };
            const updatedItemsList = updateItemsList(itemToAdd, itemsState);
            // here should be available an EP for storing favorites
            localStorage.setItem('favorites', JSON.stringify(payload));
            dispatch({ type: ADD_FAVORITE, payload });
            dispatch({ type: UPDATE_ITEMS_FAVORITES, payload: { items: updatedItemsList.items } });
        },
        []
    );

    const removeFromFavorites = useCallback(
        (itemId: string, itemsState: ItemsState, dispatch: (value: ItemsActionTypes) => void) => {
            const cleanedFavorites = removedFavorites(itemId, itemsState);
            const itemToRemove = findItem(itemId, itemsState);

            if (itemToRemove) {
                itemToRemove.isFavorite = false;
                const updatedItemsList = updateItemsList(itemToRemove, itemsState);
                const payload = { items: updatedItemsList.items };
                dispatch({ type: UPDATE_ITEMS_FAVORITES, payload });
            }

            if (cleanedFavorites) {         
                const payload = { favorites: cleanedFavorites };   
                // here should be available an EP for storing favorites
                localStorage.setItem('favorites', JSON.stringify(payload));
                dispatch({ type: REMOVE_FAVORITE, payload });
            }
        },
        []
    );

    const getFavorites = useCallback(() => {
        const storeFavorites = localStorage.getItem('favorites');
        if (storeFavorites && typeof dispatch === 'function') {
            const payload = {favorites: JSON.parse(storeFavorites)};
            dispatch({ type: GET_FAVORITES, payload });
        }
    }, [dispatch]);

    const handleFavorites = (e: React.SyntheticEvent) => {
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
    };

    return {
        favorites: typeof state === 'object' ? state.favorites : [],
        handleFavorites,
        handleSearchFavorites,
        handleClearSearchFavorites,
        onChangeTitleFavorites,
    };
};
