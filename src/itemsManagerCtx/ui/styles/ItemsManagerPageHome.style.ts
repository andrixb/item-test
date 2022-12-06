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
        borderRadius: `5px 5px 0 0`,
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
        border: `2px solid ${darkMediumBlue}`,
        borderRadius: `0 0 5px 5px`,
    },
}));
