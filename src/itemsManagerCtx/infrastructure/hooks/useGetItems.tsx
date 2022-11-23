import { useCallback, useState } from 'react';
import { ItemType } from '../../domain/entities';
import { fetchItemsBatch } from '../../domain/useCases/fetchItemsBatch';

export const useGetItems = () => {
    const [currentItems, setCurrentItems] = useState<ItemType[]>([]);
    const [email, setEmail] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [price, setPrice] = useState<string>('');

    const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void =>
        setEmail(e.currentTarget.value);
    const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void =>
        setTitle(e.currentTarget.value);
    const onChangePrice = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void =>
        setPrice(e.currentTarget.value);
    const onChangeDescription = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void =>
        setDescription(e.currentTarget.value);

    const handleSearch = useCallback(async (event: React.SyntheticEvent) => {
        event.preventDefault();
        const searchParams = { email, title, price, description };
        const { items } = await fetchItemsBatch({ searchParams });
        if (items) {
            setCurrentItems(items);
        }
    }, [email, title, price, description]);

    return {
        currentItems,
        handleSearch,
        onChangeEmail,
        onChangeTitle,
        onChangePrice,
        onChangeDescription,
    };
};
