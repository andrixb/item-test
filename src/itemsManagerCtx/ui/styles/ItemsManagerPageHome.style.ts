import { makeStyles } from '@mui/styles';
import { lightYellow, darkGreenBlue, darkMediumBlue } from '../../../shared/ui/styles/colors';

interface ItemsManagerPageHomeTheme {
    mixins: any;
    zIndex: any;
    transitions: any;
    breakpoints: any;
    spacing: any;
}

export const useItemsManagerPageHomeStyles = makeStyles((theme: ItemsManagerPageHomeTheme) => ({
    appBar: {
        width: '100%',
        paddingBottom: 8,
    },
    subBar: {
        display: 'flex',
        justifyContent: 'center',
    },
    favoriteIconWrapper: {
        background: darkGreenBlue,
        padding: 8,
    },
    favoriteIcon: {
        color: lightYellow,
    },
    searchResultsContainer: {
        padding: 16,
        marginTop: 400,
        [theme.breakpoints.up('md')]: {
            marginTop: 250,
        },
    },
}));
