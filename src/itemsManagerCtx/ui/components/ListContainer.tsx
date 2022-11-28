import { Typography } from '@mui/material';
import { Virtuoso } from 'react-virtuoso';
import { useItems } from '../../infrastructure/hooks';
import { itemsReducer } from '../../infrastructure/reducers';
import { ListItemComponent } from './ListItemComponent';

interface ListContainerProps {
  
}

export const ListContainer = ({  }: ListContainerProps) => {
    const { state } = useItems();

    return (
        <>
            {!!itemsReducer && (
                <Virtuoso
                    useWindowScroll
                    data={state.items}
                    itemContent={(index, item) => (
                        <ListItemComponent key={index} title={item.title} image={item.image}>
                            <Typography variant="body1">{item.description}</Typography>
                        </ListItemComponent>
                    )}
                />
            )}
        </>
    );
};
