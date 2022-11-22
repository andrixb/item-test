import { Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, ListItem } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

interface ListItemComponentProps {
    title?: string;
    image?: string;
    children?: JSX.Element;
}

export const ListItemComponent = ({ title, image, children }: ListItemComponentProps) => (
    <ListItem component="div" style={{ padding: '1rem 0.5rem' }}>
        <Card sx={{ maxWidth: '100%'}}>
            <CardHeader title={title} />
            <CardMedia component="img" height="auto" image={image} alt={title} />
            <CardContent>{children}</CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
            </CardActions>
        </Card>
    </ListItem>
);
