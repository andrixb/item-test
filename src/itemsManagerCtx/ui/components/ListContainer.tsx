import { Typography } from '@mui/material';
import { Virtuoso } from 'react-virtuoso';
import { useGetItems } from '../../infrastructure/hooks';
import { ListItemComponent } from './ListItemComponent';

export const ListContainer = () => {
    const { currentItems } = useGetItems();

    return (
        !!currentItems && (
            <Virtuoso
                useWindowScroll
                data={currentItems}
                itemContent={(index, item) => (
                    <ListItemComponent key={index} title={item.title} image={item.image}>
                        <Typography variant="body1">{item.description}</Typography>
                    </ListItemComponent>
                )}
            />
        )
    );
};
