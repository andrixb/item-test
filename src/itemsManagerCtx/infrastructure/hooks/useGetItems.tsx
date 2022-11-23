import React, { useEffect, useState } from 'react';
import { ItemType } from '../../domain/entities';
import { fetchItemsBatch } from '../../domain/useCases/fetchItemsBatch';
import { ISearchParams } from '../interfaces';

export const useGetItems = () => {
    const [currentItems, setCurrentItems] = useState<ItemType[]>([]);

    const receiveItems = async (searchParams?: ISearchParams) => {
        const { items } = await fetchItemsBatch({ searchParams });
        if (items) {
            setCurrentItems(items);
        }
    };

    const handleSearch = (event: React.SyntheticEvent, { email, price, title, description }: ISearchParams) => {
        event.preventDefault();
        console.log({ email, price, title, description })
        receiveItems({ email, price, title, description });
    };

    // useEffect(() => {
    //     receiveItems();
    // }, []);

    return {
        currentItems,
        handleSearch,
    };
};
