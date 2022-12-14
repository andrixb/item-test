import { useFavorites, useFavoritesModal, useItems, useSortItems } from '../infrastructure/hooks';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import { SearchComponent, SortComponent, FavoritesModal, ListContainerVirtualised } from './components';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useItemsManagerPageHomeStyles } from './styles';
import { useEffect } from 'react';

function ItemsManagerPageHome() {
    const classes = useItemsManagerPageHomeStyles();
    const handleOpenFavoritesModal = (event: React.SyntheticEvent) => handleOpenModal(event);

    const { items, handleSearch, onChangeEmail, onChangePrice, onChangeTitle, onChangeDescription } = useItems();
    const { favorites, handleSearchFavorites, onChangeTitleFavorites } = useFavorites();
    const { handleSortByTitle, handleSortByDescription, handleSortByEmail, handleSortByPrice } = useSortItems();
    const { handleCloseModal, handleOpenModal, openModal } = useFavoritesModal();

    useEffect(() => () => localStorage.setItem('favorites', JSON.stringify({})), []);

    return (
        <>
            <FavoritesModal
                favorites={favorites}
                handleClose={handleCloseModal}
                open={openModal}
                handleSearchFavorites={handleSearchFavorites}
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
                                aria-label="show favorites"
                                data-test="show-favorites"
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
                {items.length > 0 ? (
                    <Box className={classes.searchResultsContainer} data-test="items-container">
                        <ListContainerVirtualised items={items} />
                    </Box>
                ) : (
                    <Box>
                        <Typography variant="h2">Start searching</Typography>
                    </Box>
                )}
            </Box>
        </>
    );
}

export default ItemsManagerPageHome;
