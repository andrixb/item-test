import { AxiosInstance, AxiosError, AxiosResponse } from 'axios';

export default function interceptors(axiosInstance: AxiosInstance) {
    axiosInstance.interceptors.response.use(
        (response: AxiosResponse) => {
            return response;
        },
        (error: AxiosError) => {
            return Promise.reject(error);
        }
    );
}
