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

export function axiosErrorBaseResponseMock<T>(errorData: T): AxiosResponse<T> {
    const mock: AxiosResponse<T> = {
        config: null as any,
        status: 500,
        statusText: '',
        headers: {},
        request: null,
        data: errorData,
    };
    return mock;
}
