import { useContext } from 'react';
import { sortByKey } from '../../../shared/infrastructure/helpers/sortByKey';
import { ItemType } from '../../domain/entities';
import { SORT_BY_DESCRIPTION, SORT_BY_EMAIL, SORT_BY_PRICE, SORT_BY_TITLE } from '../actions';
import { ItemContext } from '../contexts';

export const useSortItems = () => {
    const context = useContext(ItemContext);
    if (!context) {
        throw new Error(`useItems must be used within a ItemsProvider`);
    }
    const [state, dispatch] = context;

    const handleSortByTitle = () => {
        const { items } = state;
        const sortedItems = sortByKey<ItemType>(items, 'title');
        if (typeof dispatch === 'function') {
            const payload = { items: sortedItems };
            dispatch({ type: SORT_BY_TITLE, payload });
        }
    };

    const handleSortByDescription = () => {
        const { items } = state;
        const sortedItems = sortByKey<ItemType>(items, 'description');
        if (typeof dispatch === 'function') {
            const payload = { items: sortedItems };
            dispatch({ type: SORT_BY_DESCRIPTION, payload });
        }
    };

    const handleSortByEmail = () => {
        const { items } = state;
        const sortedItems = sortByKey<ItemType>(items, 'email');
        if (typeof dispatch === 'function') {
            const payload = { items: sortedItems };
            dispatch({ type: SORT_BY_EMAIL, payload });
        }
    };

    const handleSortByPrice = () => {
        const { items } = state;
        const sortedItems = sortByKey<ItemType>(items, 'price');
        if (typeof dispatch === 'function') {
            const payload = { items: sortedItems };
            dispatch({ type: SORT_BY_PRICE, payload });
        }
    };

    return {
        handleSortByTitle,
        handleSortByDescription,
        handleSortByEmail,
        handleSortByPrice,
    };
};
