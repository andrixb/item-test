import { makeStyles } from '@mui/styles';
import { white } from '../../../shared/ui/styles/colors';

interface SortComponentStylesTheme {
    mixins: any;
    zIndex: any;
    transitions: any;
    breakpoints: any;
    spacing: any;
}

export const useSortComponentStyles = makeStyles((theme: SortComponentStylesTheme) => ({
    root: {
        width: '100%',
        display: 'flex',
        flexFlow: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        [theme.breakpoints.up('md')]: {
            flexFlow: 'row',
            justifyContent: 'flex-end',
        },
    },
    sortWrapper: {
        marginRight: 4,
        textTransform: 'uppercase',
    },
    labelWrapper: {
        color: white,
    },
}));
