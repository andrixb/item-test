import { useState } from 'react';
import { useFavorites, useItems, useSortItems } from '../infrastructure/hooks';
import { Box, Tab, Tabs } from '@mui/material';
import { a11yProps, SearchComponent, TabPanel, ListContainer, SortComponent } from './components';

function ItemsManagerPageHome() {
    const [value, setValue] = useState<number>(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const { items, handleSearch, onChangeEmail, onChangePrice, onChangeTitle, onChangeDescription } = useItems();
    const { favorites } = useFavorites();
    const { handleSortByTitle, handleSortByDescription, handleSortByEmail, handleSortByPrice } = useSortItems();

    return (
        <Box>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="menu panel">
                    <Tab label="Search Items" {...a11yProps(0)} />
                    <Tab label="Favorites" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
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
            </TabPanel>
            <TabPanel value={value} index={1}>
                <ListContainer items={favorites} />
            </TabPanel>
        </Box>
    );
}

export default ItemsManagerPageHome;
