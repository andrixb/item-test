import { Button, Divider, Modal, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { ItemType } from '../../domain/entities';
import { useFavoritesModalStyles } from '../styles';

interface FavoritesModalProps {
    open: boolean;
    handleClose: (event: React.SyntheticEvent) => void;
    // handleAddNewNote: (event: React.FormEvent<HTMLFormElement>) => void;
    favorites?: ItemType[];
}

export const FavoritesModal = ({
    open,
    handleClose,
    // handleAddNewNote,
    favorites,
}: FavoritesModalProps) => {
    const classes = useFavoritesModalStyles();
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className={classes.root}>
                {favorites?.length === 0  && (
                    <Box component="div">
                        <Typography variant="body2">No Favorites</Typography>
                    </Box>
                )}

                {!!favorites &&
                    favorites?.map((favorite: ItemType) => (
                        <Box component="div" key={favorite.id}>
                            <Typography variant="body2">{favorite.title}</Typography>
                        </Box>
                    ))}
                {/* {!!favorites && (
                    <Box component="form" onSubmit={() => {}} noValidate sx={{ mt: 1 }} autoComplete="off">
                        <TextField margin="normal" fullWidth label="New" name="favoriteModalContent" autoFocus />
                        <Button type="submit">Add</Button>
                    </Box>
                )} */}
            </Box>
        </Modal>
    );
};
