import { useState } from 'react';

export const useFavoritesModal = () => {
    const [openModal, setOpenModal] = useState<boolean>(false);

    const handleOpenModal = (event: React.SyntheticEvent) => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);

    return {
        openModal,
        handleOpenModal,
        handleCloseModal,
    };
};
