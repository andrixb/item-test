/// <reference types="jest" />
import { jest, expect } from '@jest/globals';
import { itemsAllAxiosResponseMock } from '../../../../__tests__/__mocks__/axiosResponse/allItemsResponse.mock';
import { errorItemsAxiosResponseMock } from '../../../../__tests__/__mocks__/axiosResponse/errorItemsResponse.mock';
import { apiInstance } from '../../../shared/infrastructure/api/apiClient';
import { getItems, GetItemsRequest } from './getItems';

const getStub = jest.spyOn(apiInstance, 'get');

describe('Get Items Repository', () => {
    const requestItemsData: GetItemsRequest = {
        searchParams: {},
    };

    it('should return a list of items', async () => {
        getStub.mockImplementationOnce(async () => itemsAllAxiosResponseMock());
        const { items } = await getItems(requestItemsData);
        expect(items).toBeDefined();
        expect(items.length).toBeGreaterThan(0);
    });

    it('should return a error', async () => {
        getStub.mockResolvedValueOnce(errorItemsAxiosResponseMock());
        const response = await getItems(requestItemsData);
        expect(response.items).toBeUndefined();
    });
});
