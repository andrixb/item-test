import { Typography } from '@mui/material';
import { Virtuoso } from 'react-virtuoso';
import { ItemType } from '../../domain/entities';
import { ListItemComponent } from './ListItemComponent';

interface ListContainerProps {
    currentItems: ItemType[];
}

export const ListContainer = ({ currentItems }: ListContainerProps) => (
    <>
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
    </>
);
