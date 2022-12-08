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
import { findByTitle, findFavorites, findItem, removedFavorites, updateItemsList } from '../helpers/listItemsHelper';
import { ItemsState } from '../interfaces';

export const useFavorites = () => {
    const context = useContext(ItemContext);
    if (!context) {
        throw new Error(`useFavorites must be used within a ItemProvider`);
    }

    const [state, dispatch] = context;
    const [title, setTitle] = useState<string>('');

    const addToFavorites = useCallback(
        async (itemToAdd: ItemType, itemsState: ItemsState, dispatch: (value: ItemsActionTypes) => void) => {
            itemToAdd.isFavorite = true;
            const payload = { favorites: [...itemsState.favorites, itemToAdd] };
            const updatedItemsList = await updateItemsList(itemToAdd, itemsState);
            // here should be available an EP for storing favorites
            localStorage.setItem('favorites', JSON.stringify(payload));

            dispatch({ type: ADD_FAVORITE, payload });
            dispatch({ type: UPDATE_ITEMS_FAVORITES, payload: { items: updatedItemsList?.items ?? [] } });
        },
        []
    );

    const removeFromFavorites = useCallback(
        async (itemId: string, itemsState: ItemsState, dispatch: (value: ItemsActionTypes) => void) => {
            try {
                const cleanedFavorites = await removedFavorites(itemId, itemsState);
                const itemToRemove = await findItem(itemId, itemsState);

                if (itemToRemove) {
                    itemToRemove.isFavorite = false;
                    const updatedItemsList = await updateItemsList(itemToRemove, itemsState);
                    const payload = { items: updatedItemsList?.items ?? [] };

                    dispatch({ type: UPDATE_ITEMS_FAVORITES, payload });
                }

                if (cleanedFavorites) {
                    const payload = { favorites: cleanedFavorites };
                    // here should be available an EP for storing favorites
                    localStorage.setItem('favorites', JSON.stringify(payload));

                    dispatch({ type: REMOVE_FAVORITE, payload });
                }
            } catch (e) {
                throw new Error(`Error: ${e}`);
            }
        },
        []
    );

    const manageFavorite = useCallback(
        async (itemId: string, stateItems: ItemsState, dispatch: (value: ItemsActionTypes) => void) => {
            try {
                const existsInFavorites = await findFavorites(itemId, stateItems);
                if (!existsInFavorites) {
                    const itemToAdd = await findItem(itemId, stateItems);
                    if (itemToAdd) {
                        await addToFavorites(itemToAdd, stateItems, dispatch);
                    }
                }
                if (existsInFavorites) {
                    await removeFromFavorites(itemId, stateItems, dispatch);
                }
            } catch (e) {
                throw new Error(`${e}`);
            }
        },
        [addToFavorites, removeFromFavorites]
    );

    const getFavorites = useCallback(() => {
        const storeFavorites = localStorage.getItem('favorites');
        if (storeFavorites && typeof dispatch === 'function') {
            const payload = { favorites: JSON.parse(storeFavorites) };

            dispatch({ type: GET_FAVORITES, payload });
        }
    }, [dispatch]);

    const onChangeTitleFavorites = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void =>
        setTitle(e.currentTarget.value);

    const handleSearchFavorites = async (event: React.SyntheticEvent) => {
        event.preventDefault();
        if (typeof state === 'object' && typeof dispatch === 'function') {
            const foundFavorites = await findByTitle(state, title);

            if (foundFavorites) {
                dispatch({ type: SEARCH_FAVORITES, payload: { favorites: foundFavorites } });
            } else {
                getFavorites();
            }
        }
    };

    const handleFavorites = (e: React.SyntheticEvent) => {
        const itemId = e.currentTarget.id ? e.currentTarget.id : '';
        if (itemId && typeof state === 'object' && typeof dispatch === 'function') {
            manageFavorite(itemId, state, dispatch);
        }
    };

    return {
        favorites: typeof state === 'object' ? state.favorites : [],
        handleFavorites,
        handleSearchFavorites,
        onChangeTitleFavorites,
    };
};
