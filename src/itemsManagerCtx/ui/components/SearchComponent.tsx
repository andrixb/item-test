import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { useGetItems } from '../../infrastructure/hooks';
import { useSearchForm } from '../../infrastructure/hooks/useSearchForm';
import { useSearchComponentStyles } from '../styles/SearchComponent.style';

export const SearchComponent = () => {
    const { handleSearch } = useGetItems();
    const classes = useSearchComponentStyles();
    const { email, price, title, description, onChangeEmail, onChangePrice, onChangeTitle, onChangeDescription } =
        useSearchForm();

    return (
        <Box component="div">
            <Box
                component="form"
                autoComplete="off"
                onSubmit={(e) => handleSearch(e, { email, price, title, description })}
            >
                <Box
                    component="div"
                    className={classes.fieldsWrapper}
                >
                    <TextField
                        name="title"
                        variant="outlined"
                        label="Title"
                        onChange={onChangeTitle}
                        className={classes.inputField}
                    />
                    <TextField
                        id="description-search"
                        name="description"
                        variant="outlined"
                        label="Description"
                        className={classes.inputField}
                        onChange={onChangeDescription}
                    />
                    <TextField
                        id="price-search"
                        name="price"
                        label="Price"
                        variant="outlined"
                        onChange={onChangePrice}
                        className={classes.inputField}
                    />
                    <TextField
                        id="email-search"
                        name="email"
                        label="email"
                        variant="outlined"
                        onChange={onChangeEmail}
                        className={classes.inputField}
                    />
                </Box>
                <Box component="div" className={classes.buttonWrapper}>
                    <Button type="submit" variant="contained">
                        Search
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};
