import { Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, ListItem } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { darkMediumGrey, lightRed } from '../../../shared/ui/styles/colors';

interface ListItemComponentProps {
    title?: string;
    image?: string;
    isFavorite?: boolean;
    id: string;
    handleFavorites: (e: React.SyntheticEvent) => void;
    children?: JSX.Element;
}

export const ListItemComponent = ({
    title,
    image,
    isFavorite,
    id,
    children,
    handleFavorites,
}: ListItemComponentProps) => (
    <ListItem component="div" style={{ padding: '1rem 0.5rem' }} key={`item-${id}`}>
        <Card sx={{ maxWidth: '100%' }}>
            {!!title && <CardHeader title={title} />}
            {!!image && <CardMedia component="img" height="auto" image={image} alt={title} />}
            {!!children && <CardContent>{children}</CardContent>}
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites" id={id} onClick={handleFavorites}>
                    <FavoriteIcon sx={isFavorite ? { color: lightRed } : { color: darkMediumGrey }} />
                </IconButton>
            </CardActions>
        </Card>
    </ListItem>
);
