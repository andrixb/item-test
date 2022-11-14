import axios from 'axios';
import getAccessToken from '../Auth';

import interceptors from './interceptors';

export const apiClient = () => {
    const axiosInstance = axios.create({
        baseURL: process.env['NEXT_PUBLIC_BASE_URL'],
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${getAccessToken()}`,
        },
    });

    interceptors(axiosInstance);

    return {
        post: <T>(path: any, body: any) => axiosInstance.post<T>(path, body),
        put: <T>(path: any, body: any) => axiosInstance.put<T>(path, body),
        get: <T>(path: any, options: any) => axiosInstance.get<T>(path, options),
        delete: <T>(path: any, body: any) => axiosInstance.delete<T>(path, { data: body }),
    };
};

export const apiInstance = apiClient();
