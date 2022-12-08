import React from 'react';
import { get } from 'lodash';
import i18next from 'react-i18next';
import * as locale from '../../src/shared/infrastructure/locales/en.json';

const tJestMock = jest.fn().mockImplementation((key: string, options: any) => {
    let text = '';

    if (key) {
        text = get(locale, key, '');

        if (options) {
            for (let option in options) {
                text = text.replace(`{{${option}}}`, options[option]);
            }
        }
    }

    return text;
});
jest.mock('i18next', () => ({
    t: tJestMock,
}));

jest.mock('react-i18next', () => ({
    useTranslation: jest.fn(),
    Trans: ({ children, components }: any) => (
        <span>
            {components?.length > 0
                ? components?.map((component: any, index: number) => <span key={index}>{component}</span>)
                : children}
        </span>
    ),
}));

i18next.useTranslation = jest.fn().mockImplementation((): any => ({
    t: tJestMock,
}));
