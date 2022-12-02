import { Typography } from '@mui/material';
import { Virtuoso } from 'react-virtuoso';
import { useFavorites } from '../../infrastructure/hooks';
// import { itemsReducer } from '../../infrastructure/reducers';
import { ListItemComponent } from './ListItemComponent';
import { ItemType } from '../../domain/entities';

interface ListContainerProps {
    items: ItemType[];
}

export const ListContainer = ({ items }: ListContainerProps) => {
    const { handleFavs } = useFavorites();

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
                            handleFavs={handleFavs}
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
        </>
    );
};
