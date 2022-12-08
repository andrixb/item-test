import { errorItemsMock } from '../items/errorItems.mock';
import { axiosErrorBaseResponseMock } from './axiosBaseResponse.mock';

export const errorItemsAxiosResponseMock = () => axiosErrorBaseResponseMock(errorItemsMock);
