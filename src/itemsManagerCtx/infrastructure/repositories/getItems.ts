import { apiInstance } from '../../../shared/infrastructure/api/apiClient';
import { adaptItemsResponse } from '../adapters/adaptItemsResponse';
import { ItemsResponse, ItemsResponsePayload } from '../interfaces';

export interface GetItemsRequest {
    page?: number;
}

export async function getItems({ page }: GetItemsRequest): Promise<ItemsResponse> {
    const response = await apiInstance.get<ItemsResponsePayload>(`/api/items?offset=${page ?? 0}`, {});

    if (!response) {
        return [] as unknown as ItemsResponse;
    }

    return adaptItemsResponse(response.data);
}
