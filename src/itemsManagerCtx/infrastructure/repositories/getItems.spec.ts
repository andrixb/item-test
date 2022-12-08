/// <reference types="jest" />
import { jest, expect } from '@jest/globals';
import axios from 'axios';
import { allItemsMock } from '../../../../__tests__/__mocks__/items/allItems.mock';
import { adaptItemsResponse } from '../adapters/adaptItemsResponse';
import { getItems, GetItemsRequest } from './getItems';
jest.mock('axios');
const axiosMock = axios as jest.Mocked<typeof axios>;

describe('Get Items Repository', () => {
    const requestItemsData: GetItemsRequest = {
        searchParams: {}
    };

    beforeEach(() => {
        axiosMock.get.mockClear();
    });

    it('should return a list of items', async () => {
        axiosMock.get.mockResolvedValue({
            data: allItemsMock,
        });

        const results = await getItems(requestItemsData);
        const adaptedItemsMockResults = adaptItemsResponse(allItemsMock);
        expect(results).toEqual(adaptedItemsMockResults);
    });

    it('should not return a list of items', async () => {
        const errorResponseData = {
            data: undefined
        };
        axiosMock.get.mockRejectedValue('Error');
        axiosMock.get.mockResolvedValue({
            data: [],
        });

        const results = await getItems(requestItemsData);
        expect(results).toEqual(errorResponseData);
    });
});
