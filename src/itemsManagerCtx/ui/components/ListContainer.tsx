import { Typography } from '@mui/material';
import { Virtuoso } from 'react-virtuoso';
import { useFavorites } from '../../infrastructure/hooks';
import { ListItemComponent } from './ListItemComponent';
import { ItemType } from '../../domain/entities';

interface ListContainerProps {
    items: ItemType[];
}

export const ListContainer = ({ items }: ListContainerProps) => {
    const { handleFavorites } = useFavorites();

    return (
        <>
            {!!items && (
                <Virtuoso
                    useWindowScroll
                    data={items}
                    itemContent={(index, item) => (
                        <ListItemComponent
                            key={`list-item-${index}-${item.id}`}
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            isFavorite={item.isFavorite}
                            handleFavorites={handleFavorites}
                        >
                            <>
                                <Typography variant="h4">Description:</Typography>
                                <Typography variant="body1">{item.description}</Typography>
                                <br />
                                <Typography variant="h4">Email:</Typography>
                                <Typography variant="body1">{item.email}</Typography>
                                <br />
                                <Typography variant="h4">Price:</Typography>
                                <Typography variant="body1">{item.price}</Typography>
                            </>
                        </ListItemComponent>
                    )}
                />
            )}
            {!items && (
                <>
                    <Typography>There are no items to show</Typography>
                </>
            )}
        </>
    );
};
