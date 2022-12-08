/// <reference types="jest" />
import { expect } from '@jest/globals';
import { allFavoritesMock } from '../../../../__tests__/__mocks__/items/allFavorites.mock';
import { allItemsMock } from '../../../../__tests__/__mocks__/items/allItems.mock';
import { itemsSortedByTitleMock } from '../../../../__tests__/__mocks__/items/itemsSortedByTitle.mock';

import { ADD_FAVORITE, GET_ITEMS, ItemsActionTypes, SORT_BY_TITLE } from "../actions";
import { ItemsState } from "../interfaces";
import { itemsReducer } from "./itemsReducer";


describe('Items Reducer Test', () => {
    beforeEach(() => {});

    const initialState = {
        items: [],
        favorites: [],
    };

    it('Should return a empty state on initialize app', () => {
        const expectedState: ItemsState = initialState;

        const reducedState = itemsReducer(initialState, {
            type: GET_ITEMS,
            payload: { items: [] },
        });

        expect(reducedState).toEqual(expectedState);
    });

    it('Should update state after received GET_ITEMS action', () => {
        const { items } = allItemsMock.data;

        const expectedState: ItemsState = {
            items,
            favorites: [],
        };
        const mockedItemsListAction: ItemsActionTypes = {
            type: GET_ITEMS,
            payload: { items },
        };

        const reducedState = itemsReducer(initialState, mockedItemsListAction);

        expect(reducedState).toEqual(expectedState);
    });

    it('Should update state with ordered items by title', () => {
        const { items } = itemsSortedByTitleMock;

        const expectedState: ItemsState = {
            items,
            favorites: [],
        };
        const mockedItemsListAction: ItemsActionTypes = {
            type: SORT_BY_TITLE,
            payload: { items },
        };

        const reducedState = itemsReducer(initialState, mockedItemsListAction);
        expect(reducedState).toEqual(expectedState);
    });

    it('Should update favorites', () => {
        const favorites = allFavoritesMock.data.items;

        const expectedState: ItemsState = {
            items: [],
            favorites,
        };
        const mockedItemsListAction: ItemsActionTypes = {
            type: ADD_FAVORITE,
            payload: { favorites },
        };

        const reducedState = itemsReducer(initialState, mockedItemsListAction);
        expect(reducedState).toEqual(expectedState);
    });

});
