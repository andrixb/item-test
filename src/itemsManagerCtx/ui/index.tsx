import { Box } from '@mui/material';
import { useItems, useSortItems } from '../infrastructure/hooks';
import { SearchComponent } from './components';
import { ListContainer } from './components/ListContainer';
import { ListFavorites } from './components/ListFavorites';
import { SortComponent } from './components/SortComponent';

function ItemsManagerPageHome() {
    const { items, handleSearch, onChangeEmail, onChangePrice, onChangeTitle, onChangeDescription } = useItems();
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
            <ListContainer items={items} />
            <ListFavorites />
        </Box>
    );
}

export default ItemsManagerPageHome;
