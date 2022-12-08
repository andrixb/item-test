import { makeStyles } from '@mui/styles';
import { white } from '../../../shared/ui/styles/colors';

interface FavoriteModalStylesTheme {
    mixins: any;
    zIndex: any;
    transitions: any;
    breakpoints: any;
    spacing: any;
}

export const useFavoritesModalStyles = makeStyles((theme: FavoriteModalStylesTheme) => ({
    root: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        minWidth: 400,
        minHeight: '50vh',
        backgroundColor: white,
        border: '2px solid #000',
        padding: 16,
    },
}));