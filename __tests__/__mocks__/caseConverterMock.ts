import { axiosMock } from './axiosMock';

jest.mock('axios-case-converter', () =>
    jest.fn().mockImplementation(() => ({
        get: axiosMock.get,
        post: axiosMock.post,
        patch: axiosMock.patch,
        delete: axiosMock.delete,
    }))
);
