import { Box } from '@mui/system';
import { Breadcrumbs, Chip, Typography } from '@mui/material';
import { useSortComponentStyles } from '../styles';

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
    const classes = useSortComponentStyles();
    return (
        <>
            <Box component="div" className={classes.root}>
                <Typography variant="body1" className={classes.sortWrapper}>
                    Sort by
                </Typography>
                <Breadcrumbs aria-label="breadcrumb">
                    <Chip
                        className={classes.labelWrapper}
                        label="Title"
                        variant="outlined"
                        onClick={handleSortByTitle}
                    />
                    <Chip
                        className={classes.labelWrapper}
                        label="Email"
                        variant="outlined"
                        onClick={handleSortByEmail}
                    />
                    <Chip
                        className={classes.labelWrapper}
                        label="Price"
                        variant="outlined"
                        onClick={handleSortByPrice}
                    />
                    <Chip
                        className={classes.labelWrapper}
                        label="Description"
                        variant="outlined"
                        onClick={handleSortByDescription}
                    />
                </Breadcrumbs>
            </Box>
        </>
    );
};
