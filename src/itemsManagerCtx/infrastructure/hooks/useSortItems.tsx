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

    const dispatchSortState = (
        type: typeof SORT_BY_DESCRIPTION | typeof SORT_BY_EMAIL | typeof SORT_BY_PRICE | typeof SORT_BY_TITLE,
        key: keyof ItemType
    ) => {
        if (typeof state === 'object') {
            const { items } = state;
            const sortedItems = sortByKey<ItemType>(items, key);
            if (typeof dispatch === 'function') {
                const payload = { items: sortedItems };
                dispatch({ type, payload });
            }
        }
    };

    const handleSortByTitle = () => dispatchSortState(SORT_BY_TITLE, 'title');
    const handleSortByDescription = () => dispatchSortState(SORT_BY_DESCRIPTION, 'description');
    const handleSortByEmail = () => dispatchSortState(SORT_BY_EMAIL,  'email');
    const handleSortByPrice = () => dispatchSortState(SORT_BY_PRICE, 'price');

    return {
        handleSortByTitle,
        handleSortByDescription,
        handleSortByEmail,
        handleSortByPrice,
    };
};
