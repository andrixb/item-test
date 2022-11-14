import { createTheme, PaletteOptions } from '@mui/material';
import {
    darkBlue,
    darkerGrey,
    darkGreen,
    darkGreenBlue,
    lightBlue,
    darkMediumGrey,
    darkMediumBlue,
    lightGrey,
    lightLightBlue,
    mediumBlue,
    mediumGreen,
    mediumLightBlue,
    mediumRed,
    white,
} from './colors';

import { typography } from './typography';

declare module '@mui/material/styles/createTheme' {
    interface Theme {
        colors: {
            white: string;
            lightBlue: string;
            darkerGrey: string;
            darkMediumGrey: string;
            lightGrey: string;
        };
    }

    interface ThemeOptions {
        colors?: {
            white?: string;
            lightBlue?: string;
            darkerGrey?: string;
            darkMediumGrey?: string;
            lightGrey?: string;
        };
    }
}

export const appPalette: PaletteOptions = {
    primary: {
        light: darkMediumBlue,
        main: darkBlue,
        dark: darkGreenBlue,
    },
    success: {
        main: mediumGreen,
        dark: darkGreen,
    },
    error: {
        main: mediumRed,
    },
    info: {
        light: lightLightBlue,
        main: mediumLightBlue,
        dark: mediumBlue,
    },
};

export const appColors = {
    white,
    lightBlue,
    darkerGrey,
    darkMediumGrey,
    lightGrey,
};
export const typographyColors = {
    styleOverrides: ({ ownerState }: { ownerState: any }) => ({
        ...(ownerState.color === 'primary' && {
            color: darkBlue,
        }),
        ...(ownerState.color === 'secondary' && {
            color: white,
        }),
        ...(ownerState.color === 'textPrimary' && {
            color: mediumLightBlue,
        }),
        ...(ownerState.color === 'textSecondary' && {
            color: mediumBlue,
        }),
        ...(ownerState.color === 'error' && {
            color: mediumRed,
        }),
    }),
};
export const componentsOverrides = {
    MuiIconButton: {
        styleOverrides: {
            root: {
                padding: '16px',
                '&&.Mui-disabled': {
                    color: 'inherit',
                },
            },
        },
    },
    MuiButton: {
        styleOverrides: {
            containedPrimary: {
                color: appColors.white,
                backgroundColor: mediumGreen,
                borderRadius: 4,
                fontSize: 18,
                '&:hover': {
                    backgroundColor: darkGreen,
                },
            },
            containedSecondary: {
                color: appColors.white,
                backgroundColor: darkBlue,
                borderRadius: 4,
                '&:hover': {
                    backgroundColor: mediumLightBlue,
                },
            },
        },
    },
    ...typographyColors,
};

export const appTheme = createTheme({
    palette: appPalette,
    colors: appColors,
    components: componentsOverrides,
    typography,
});