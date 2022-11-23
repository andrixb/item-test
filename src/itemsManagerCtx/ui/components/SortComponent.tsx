import { Box } from '@mui/system';
import { Breadcrumbs, Chip, Typography } from '@mui/material';

interface SortComponentProps {
    handleSortByTitle: (e: React.SyntheticEvent) => void;
    handleSortByEmail: (e: React.SyntheticEvent) => void;
    handleSortByPrice: (e: React.SyntheticEvent) => void;
    handleSortByDescription: (e: React.SyntheticEvent) => void;
}

export const SortComponent = ({
    handleSortByTitle,
    handleSortByDescription,
    handleSortByEmail,
    handleSortByPrice,
}: SortComponentProps) => {
    return (
        <>
            <Box component="div">
                <Typography variant="body1">Sort by: </Typography>
                <Breadcrumbs aria-label="breadcrumb">
                    <Chip label="Title" variant="outlined" onClick={handleSortByTitle} />
                    <Chip label="Email" variant="outlined" onClick={handleSortByEmail} />
                    <Chip label="Price" variant="outlined" onClick={handleSortByPrice} />
                    <Chip label="Description" variant="outlined" onClick={handleSortByDescription} />
                </Breadcrumbs>
            </Box>
        </>
    );
};
