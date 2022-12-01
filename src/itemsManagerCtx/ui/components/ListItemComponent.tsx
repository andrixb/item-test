import { Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, ListItem } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

interface ListItemComponentProps {
    title?: string;
    image?: string;
    id: string;
    handleAddToFavs: (e: React.SyntheticEvent) => void;
    children?: JSX.Element;
}

export const ListItemComponent = ({ title, image, id, children, handleAddToFavs }: ListItemComponentProps) => (
    <ListItem component="div" style={{ padding: '1rem 0.5rem' }} key={`item-${id}`}>
        <Card sx={{ maxWidth: '100%' }}>
            <CardHeader title={title} />
            <CardMedia component="img" height="auto" image={image} alt={title} />
            <CardContent>{children}</CardContent>
            <CardActions disableSpacing>
                <IconButton
                    aria-label="add to favorites"
                    id={id}
                    onClick={handleAddToFavs}
                >
                    <FavoriteIcon />
                </IconButton>
            </CardActions>
        </Card>
    </ListItem>
);
