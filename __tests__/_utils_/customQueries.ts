import { queryHelpers, buildQueries } from '@testing-library/react';

const testingSelector = 'data-myapp';

const queryAllByDataApp = (...args: any) =>
    // @ts-ignore
    queryHelpers.queryAllByAttribute(testingSelector, ...args);

const getMultipleError = (c: any, dataAppValue: any) =>
    `Found multiple elements with the ${testingSelector} attribute of: ${dataAppValue}`;
const getMissingError = (c: any, dataAppValue: any) =>
    `Unable to find an element with the ${testingSelector} attribute of: ${dataAppValue}`;

const [
    queryByDataApp,
    getAllByDataApp,
    getByDataApp,
    findAllByDataApp,
    findByDataApp,
] = buildQueries(queryAllByDataApp, getMultipleError, getMissingError);

export {
    queryByDataApp,
    queryAllByDataApp,
    getByDataApp,
    getAllByDataApp,
    findAllByDataApp,
    findByDataApp,
};
