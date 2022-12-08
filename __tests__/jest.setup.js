// @ts-ignore
import MutationObserver from '@sheerun/mutationobserver-shim';
import '@testing-library/jest-dom/extend-expect';

import './__mocks__/caseConverterMock';
import './__mocks__/i18nextMock';

window.MutationObserver = MutationObserver;

jest.mock('axios');
