import React, { useEffect, useState } from 'react';
import { ItemType } from '../../domain/entities';
import { fetchItemsBatch } from '../../domain/useCases/fetchItemsBatch';
import { ISearchParams } from '../interfaces';

export const useGetItems = () => {
    const [currentItems, setCurrentItems] = useState<ItemType[]>([]);

    const receiveItems = async (searchParams?: ISearchParams) => {
        try {
            const { items } = await fetchItemsBatch({ searchParams });
            if (items) {
                setCurrentItems(items ?? []);
            }
        } catch (error) {
            throw new Error(`${error}`);
        }
    };

    const handleSearch = (event: React.SyntheticEvent) => {

    }

    useEffect(() => {
        receiveItems();
    }, []);

    return {
        currentItems,
        handleSearch,
    };
};
