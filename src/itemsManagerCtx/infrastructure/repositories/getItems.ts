import { apiInstance } from '../../../shared/infrastructure/api/apiClient';
import { adaptItemsResponse } from '../adapters/adaptItemsResponse';
import { ISearchParams, ItemsResponse, ItemsResponsePayload } from '../interfaces';

export interface GetItemsRequest {
    searchParams?: ISearchParams;
}

export async function getItems({ searchParams }: GetItemsRequest): Promise<ItemsResponse> {
    try {
        const response = await apiInstance.get<ItemsResponsePayload>(
            '/api/items?' +
                `email=${searchParams?.email ?? ''}&&` +
                `title=${searchParams?.title ?? ''}&&` +
                `description=${searchParams?.description ?? ''}&&` +
                `price=${searchParams?.price ?? ''}`,
            {}
        );

        if (!response) {
            return [] as unknown as ItemsResponse;
        }

        const adaptedResponse = adaptItemsResponse(response.data);
        return adaptedResponse;
    } catch (error) {
        throw new Error(`${error}`);
    }
}
