import { useFavorites, useItems, useSortItems } from '../infrastructure/hooks';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import { SearchComponent, ListContainer, SortComponent } from './components';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useItemsManagerPageHomeStyles } from './styles';

function ItemsManagerPageHome() {
    const classes = useItemsManagerPageHomeStyles();
    const { items, handleSearch, onChangeEmail, onChangePrice, onChangeTitle, onChangeDescription } = useItems();
    const { favorites } = useFavorites();
    const { handleSortByTitle, handleSortByDescription, handleSortByEmail, handleSortByPrice } = useSortItems();

    return (
        <Box>
            <Box>
                <AppBar position="static" className={classes.appBar}>
                    <Toolbar>
                        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                            Items Manager
                        </Typography>
                        <IconButton
                            aria-label="add to favorites"
                            className={classes.favoriteIconWrapper}
                            // onClick={handleOpenFavorites}
                        >
                            <FavoriteIcon className={classes.favoriteIcon} />
                        </IconButton>
                    </Toolbar>
                    <Toolbar className={classes.subBar}>
                        <SearchComponent
                            handleSearch={handleSearch}
                            onChangeEmail={onChangeEmail}
                            onChangePrice={onChangePrice}
                            onChangeTitle={onChangeTitle}
                            onChangeDescription={onChangeDescription}
                        />
                    </Toolbar>
                </AppBar>
            </Box>
            {items.length > 0 && (
                <Box className={classes.searchResultsContainer}>
                    <SortComponent
                        handleSortByTitle={handleSortByTitle}
                        handleSortByDescription={handleSortByDescription}
                        handleSortByEmail={handleSortByEmail}
                        handleSortByPrice={handleSortByPrice}
                    />
                    <ListContainer items={items} />
                </Box>
            )}
        </Box>
    );
}

export default ItemsManagerPageHome;
