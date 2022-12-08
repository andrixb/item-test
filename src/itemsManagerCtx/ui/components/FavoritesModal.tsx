import { Divider, Modal, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { ItemType } from '../../domain/entities';
import { useFavoritesModalStyles } from '../styles';
import { ListContainer } from './ListContainer';
import { SearchComponent } from './SearchComponent';

interface FavoritesModalProps {
    open: boolean;
    handleClose: (event: React.SyntheticEvent) => void;
    handleSearchFavorites: (event: React.SyntheticEvent) => void;
    onChangeTitle: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    favorites?: ItemType[];
}

export const FavoritesModal = ({
    open,
    handleClose,
    handleSearchFavorites,
    onChangeTitle,
    favorites,
}: FavoritesModalProps) => {
    const classes = useFavoritesModalStyles();

    console.log('favorites', favorites?.length);

     
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            data-test="favorites-modal"
        >
            <Box className={classes.root}>
                <Box component="div" className={classes.headerContainer}>
                    <Typography variant="h2">Your Favorites</Typography>
                    <Divider />
                </Box>

                {!favorites || favorites.length === 0 && (
                    <Box component="div">
                        <Typography variant="h3">No Favorites</Typography>
                    </Box>
                )}

                {!!favorites && (
                    <>
                        <Box component="div" className={classes.clearSearchBtn}>
                            {favorites.length > 0 && <SearchComponent handleSearch={handleSearchFavorites} onChangeTitle={onChangeTitle} />}
                        </Box>
                        <ListContainer items={favorites} />
                    </>
                )}
            </Box>
        </Modal>
    );
};
