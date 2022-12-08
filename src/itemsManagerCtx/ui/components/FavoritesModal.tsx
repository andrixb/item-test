import { Button, Divider, Modal, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { ItemType } from '../../domain/entities';
import { useFavoritesModalStyles } from '../styles';
import { ListContainer } from './ListContainer';
import { SearchComponent } from './SearchComponent';

interface FavoritesModalProps {
    open: boolean;
    handleClose: (event: React.SyntheticEvent) => void;
    handleSearch: (event: React.SyntheticEvent) => void;
    handleClearSearchFavorites: (event: React.SyntheticEvent) => void;
    onChangeTitle: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    favorites?: ItemType[];
}

export const FavoritesModal = ({
    open,
    handleClose,
    handleSearch,
    handleClearSearchFavorites,
    onChangeTitle,
    favorites,
}: FavoritesModalProps) => {
    const classes = useFavoritesModalStyles();
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

                {!!favorites && favorites.length === 0 && (
                    <Box component="div">
                        <Typography variant="h3">No Favorites</Typography>
                    </Box>
                )}

                {!!favorites && (
                    <>
                        <Box component="div" className={classes.clearSearchBtn}>
                            {favorites.length === 0 && (
                                <>
                                    <SearchComponent handleSearch={handleSearch} onChangeTitle={onChangeTitle} />
                                    <Button
                                        className={classes.clearSearchBtn}
                                        variant="text"
                                        onClick={handleClearSearchFavorites}
                                    >
                                        Clear search
                                    </Button>
                                </>
                            )}
                        </Box>
                        <ListContainer items={favorites} />
                    </>
                )}
            </Box>
        </Modal>
    );
};
