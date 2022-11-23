import { makeStyles } from '@mui/styles';

interface SearchComponentStylesTheme {
    mixins: any;
    zIndex: any;
    transitions: any;
    breakpoints: any;
    spacing: any;
}

export const useSearchComponentStyles = makeStyles((theme: SearchComponentStylesTheme) => ({
    root: {
        width: '100%',
    },

    fieldsWrapper: {
        display: 'flex',
        flexFlow: 'column',
        [theme.breakpoints.up('md')]: {
            flexFlow: 'row',
        },
    },

    inputField: {
        margin: 2,
    },

    buttonWrapper: {
        margin: 2,
    },
}));
