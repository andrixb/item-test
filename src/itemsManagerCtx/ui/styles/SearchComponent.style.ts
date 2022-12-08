import { makeStyles } from '@mui/styles';
import { white } from '../../../shared/ui/styles/colors';

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
        background: white,
        padding: 8,
        borderRadius: 5,
    },

    formContainer: {},

    fieldsWrapper: {
        display: 'flex',
        flexFlow: 'column',
        [theme.breakpoints.up('md')]: {
            flexFlow: 'row',
            justifyContent: 'space-between',
        },
    },

    inputField: {
        margin: 2,
        width: '100%',
        background: white,
    },

    buttonWrapper: {
        width: '100%',
    },

    buttonElement: {
        width: '100%',
    },
}));
