import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { useGetItems } from '../../infrastructure/hooks';

export const SearchComponent = () => {
    const { handleSearch } = useGetItems();

    return (
        <Box component="div" style={{width: '80%'}}>
            <form>
                <TextField id="title-search" label="Outlined" variant="outlined" />
                <TextField id="description-search" label="Outlined" variant="outlined" />
                <TextField id="price-search" label="Outlined" variant="outlined" />
                <TextField id="email-search" label="Outlined" variant="outlined" />
                <Button onClick={handleSearch} variant="contained">Search</Button>
            </form>
        </Box>
    );
};
