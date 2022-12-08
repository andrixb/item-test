import { Divider, Modal, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { ItemType } from '../../domain/entities';
import { useFavoritesModalStyles } from '../styles';
import { ListContainer } from './ListContainer';
import { SearchComponent } from './SearchComponent';

interface FavoritesModalProps {
    open: boolean;
    handleClose: (event: React.SyntheticEvent) => void;
    handleSearch: (event: React.SyntheticEvent) => void;
    onChangeTitle: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    favorites?: ItemType[];
}

export const FavoritesModal = ({ open, handleClose, handleSearch, onChangeTitle, favorites }: FavoritesModalProps) => {
    const classes = useFavoritesModalStyles();
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className={classes.root}>
                <Typography variant="h2">Your Favorites</Typography>
                <Divider />
                <br />
                {favorites?.length === 0 && (
                    <Box component="div">
                        <Typography variant="h3">No Favorites</Typography>
                    </Box>
                )}

                {!!favorites && (
                    <>
                        <SearchComponent handleSearch={handleSearch} onChangeTitle={onChangeTitle} />
                        <ListContainer items={favorites} />
                    </>
                )}
            </Box>
        </Modal>
    );
};
