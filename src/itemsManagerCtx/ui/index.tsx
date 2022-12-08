import { useFavorites, useFavoritesModal, useItems, useSortItems } from '../infrastructure/hooks';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import { SearchComponent, SortComponent, FavoritesModal, ListContainerVirtualised } from './components';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useItemsManagerPageHomeStyles } from './styles';

function ItemsManagerPageHome() {
    const classes = useItemsManagerPageHomeStyles();
    const handleOpenFavoritesModal = (event: React.SyntheticEvent) => handleOpenModal(event);

    const { items, handleSearch, onChangeEmail, onChangePrice, onChangeTitle, onChangeDescription } = useItems();
    const { favorites, handleSearchFavorites, handleClearSearchFavorites, onChangeTitleFavorites } = useFavorites();
    const { handleSortByTitle, handleSortByDescription, handleSortByEmail, handleSortByPrice } = useSortItems();
    const { handleCloseModal, handleOpenModal, openModal } = useFavoritesModal();

    return (
        <>
            <FavoritesModal
                favorites={favorites}
                handleClose={handleCloseModal}
                open={openModal}
                handleSearch={handleSearchFavorites}
                handleClearSearchFavorites={handleClearSearchFavorites}
                onChangeTitle={onChangeTitleFavorites}
            />
            <Box>
                <Box>
                    <AppBar position="fixed" className={classes.appBar}>
                        <Toolbar>
                            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                                Items Manager
                            </Typography>
                            <IconButton
                                aria-label="add to favorites"
                                className={classes.favoriteIconWrapper}
                                onClick={handleOpenFavoritesModal}
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
                        {items.length > 0 && (
                            <Toolbar>
                                <SortComponent
                                    handleSortByTitle={handleSortByTitle}
                                    handleSortByDescription={handleSortByDescription}
                                    handleSortByEmail={handleSortByEmail}
                                    handleSortByPrice={handleSortByPrice}
                                />{' '}
                            </Toolbar>
                        )}
                    </AppBar>
                </Box>
                {items.length > 0 && (
                    <Box className={classes.searchResultsContainer}>
                        <ListContainerVirtualised items={items} />
                    </Box>
                )}
            </Box>
        </>
    );
}

export default ItemsManagerPageHome;
