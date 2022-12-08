/// <reference types="jest" />
import { jest, expect } from '@jest/globals';
import { itemsAllAxiosResponseMock } from '../../../../__tests__/__mocks__/axiosResponse/allItemsResponse.mock';
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
    });
});
