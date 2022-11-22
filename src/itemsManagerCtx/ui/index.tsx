import { Box } from '@mui/material';
import { SearchComponent } from './components';
import { ListContainer } from './components/ListContainer';

function ItemsManagerPageHome() {

    return (
        <Box>
            <SearchComponent />
            <ListContainer />
        </Box>
    );
}

export default ItemsManagerPageHome;
