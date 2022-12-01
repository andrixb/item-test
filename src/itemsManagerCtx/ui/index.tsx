import { Box } from '@mui/material';
import { useItems, useSortItems } from '../infrastructure/hooks';
import { SearchComponent } from './components';
import { ListContainer } from './components/ListContainer';
import { SortComponent } from './components/SortComponent';

function ItemsManagerPageHome() {
    const { state, handleSearch, onChangeEmail, onChangePrice, onChangeTitle, onChangeDescription } = useItems();
    const { handleSortByTitle, handleSortByDescription, handleSortByEmail, handleSortByPrice } = useSortItems();

    return (
        <Box>
            <SearchComponent
                handleSearch={handleSearch}
                onChangeEmail={onChangeEmail}
                onChangePrice={onChangePrice}
                onChangeTitle={onChangeTitle}
                onChangeDescription={onChangeDescription}
            />
            <SortComponent
                    handleSortByTitle={handleSortByTitle}
                    handleSortByDescription={handleSortByDescription}
                    handleSortByEmail={handleSortByEmail}
                    handleSortByPrice={handleSortByPrice}
                />
            <ListContainer />
        </Box>
    );
}

export default ItemsManagerPageHome;
