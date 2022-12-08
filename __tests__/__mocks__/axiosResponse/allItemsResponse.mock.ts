import { allItemsMock } from '../items/allItems.mock';
import { axiosOKBaseResponseMock } from './axiosBaseResponse.mock';

export const itemsAllAxiosResponseMock = () => axiosOKBaseResponseMock(allItemsMock);
