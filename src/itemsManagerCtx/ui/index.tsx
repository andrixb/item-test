import { Box } from '@mui/material';
import { useGetItems, useSortItems } from '../infrastructure/hooks';
import { SearchComponent } from './components';
import { ListContainer } from './components/ListContainer';
import { SortComponent } from './components/SortComponent';

function ItemsManagerPageHome() {
    const { currentItems, handleSearch, onChangeEmail, onChangePrice, onChangeTitle, onChangeDescription } =
        useGetItems();
    const { } = useSortItems();

    /** https://www.thisdot.co/blog/creating-a-global-state-with-react-hooks */
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
            <ListContainer currentItems={currentItems} />
        </Box>
    );
}

export default ItemsManagerPageHome;
