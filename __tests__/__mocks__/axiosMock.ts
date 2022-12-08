import axios from 'axios';

export enum Method {
    get = 'get',
    post = 'post',
    delete = 'delete',
    patch = 'patch',
}

export const axiosMock = axios as jest.Mocked<typeof axios>;

export const clearAxiosMock = () => {
    axiosMock.get.mockClear();
    axiosMock.post.mockClear();
    axiosMock.delete.mockClear();
    axiosMock.patch.mockClear();
};

export const mockRequests = (method: Method, data: any) => {
    axiosMock[method].mockResolvedValue(data);
};

export const mockRequestsOnce = (method: Method, data: any) => {
    axiosMock[method].mockResolvedValueOnce(data);
};
