import { AxiosResponse } from 'axios';

export function axiosOKBaseResponseMock<T>(responseData: T): AxiosResponse<T> {
    const mock: AxiosResponse<T> = {
        config: null as any,
        status: 200,
        statusText: '',
        headers: {},
        request: null,
        data: responseData,
    };
    return mock;
}
