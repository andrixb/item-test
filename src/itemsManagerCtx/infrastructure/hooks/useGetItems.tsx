import { useEffect, useState } from 'react';
import { ItemType } from '../../domain/entities';
import { fetchItemsBatch } from '../../domain/useCases/fetchItemsBatch';

export const useGetItems = () => {
    const [currentItems, setCurrentItems] = useState<ItemType[]>([]);

    const receiveItems = async () => {
        try {
            const DEFAULT_PAGE = 0;
            const { items } = await fetchItemsBatch({ page: DEFAULT_PAGE });
            if (items) {
                setCurrentItems(items ?? []);
            }
        } catch (error) {
            throw new Error(`${error}`);
        }
    };

    useEffect(() => { 
        receiveItems(); 
    }, []);

    return {
        currentItems,
        receiveItems,
    };
};
