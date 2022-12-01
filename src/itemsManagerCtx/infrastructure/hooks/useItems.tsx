import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { ItemType } from '../../domain/entities';
import { fetchItemsBatch } from '../../domain/useCases/fetchItemsBatch';
import { GET_ITEMS } from '../actions';
import { ItemContext } from '../contexts';

export const useItems = () => {
    const context = useContext(ItemContext);
    if (!context) {
        throw new Error(`useItems must be used within a ItemsProvider`);
    }
    const [state, dispatch] = context;

    const [email, setEmail] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [price, setPrice] = useState<string>('');

    const [itemsList, setItemsList] = useState<ItemType[]>([]);

    const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void =>
        setEmail(e.currentTarget.value);
    const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void =>
        setTitle(e.currentTarget.value);
    const onChangePrice = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void =>
        setPrice(e.currentTarget.value);
    const onChangeDescription = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void =>
        setDescription(e.currentTarget.value);

    const handleSearch = useCallback(
        async (event: React.SyntheticEvent) => {
            event.preventDefault();
            const searchParams = { email, title, price, description };
            const { items } = await fetchItemsBatch({ searchParams });

            if (items) {
                setItemsList(items);
                if (typeof dispatch === 'function') {
                    console.log('use effect');
                    dispatch({ type: GET_ITEMS, payload: { items } });
                }
            }
        },
        []
    );

    // useEffect(() => {
    //     // add a 'type guard' to prevent TS union type error
    //     if (typeof dispatch === 'function') {
    //         console.log('use effect');
    //         dispatch({ type: GET_ITEMS, payload: { items: itemsList } });
    //     }
    // }, [itemsList]);

    return {
        state,
        dispatch,
        handleSearch,
        onChangeEmail,
        onChangeTitle,
        onChangePrice,
        onChangeDescription,
    };
};
