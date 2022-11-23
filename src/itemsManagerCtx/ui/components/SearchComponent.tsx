import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { useSearchComponentStyles } from '../styles/SearchComponent.style';

interface SearchComponentProps {
    handleSearch: (event: React.SyntheticEvent) => void;
    onChangeEmail: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onChangePrice: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onChangeTitle: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onChangeDescription: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export const SearchComponent = ({
    handleSearch,
    onChangeEmail,
    onChangePrice,
    onChangeTitle,
    onChangeDescription,
}: SearchComponentProps) => {
    const classes = useSearchComponentStyles();
    return (
        <Box component="div">
            <Box component="form" autoComplete="off" onSubmit={handleSearch} className={classes.root}>
                <Box component="div" className={classes.fieldsWrapper}>
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
