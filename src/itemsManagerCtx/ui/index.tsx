import { Box, Typography } from '@mui/material';

import { Virtuoso } from 'react-virtuoso';

import { useGetItems } from '../infrastructure/hooks';
import { ListItemComponent } from './components';

function ItemsManagerPageHome() {
    const { currentItems } = useGetItems();

    return (
        <Box>
            {!!currentItems && (
                <Virtuoso
                    useWindowScroll
                    data={currentItems}
                    itemContent={(index, item) => (
                        <ListItemComponent key={index} title={item.title} image={item.image}>
                            <Typography variant="body1">{item.description}</Typography>
                        </ListItemComponent>
                    )}
                />
            )}
        </Box>
    );
}

export default ItemsManagerPageHome;
