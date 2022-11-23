import { Box } from '@mui/material';
import { useGetItems } from '../infrastructure/hooks';
import { SearchComponent } from './components';
import { ListContainer } from './components/ListContainer';

function ItemsManagerPageHome() {
    const { currentItems, handleSearch, onChangeEmail, onChangePrice, onChangeTitle, onChangeDescription } =
        useGetItems();

    return (
        <Box>
            <SearchComponent
                handleSearch={handleSearch}
                onChangeEmail={onChangeEmail}
                onChangePrice={onChangePrice}
                onChangeTitle={onChangeTitle}
                onChangeDescription={onChangeDescription}
            />
            <ListContainer currentItems={currentItems} />
        </Box>
    );
}

export default ItemsManagerPageHome;
