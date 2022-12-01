import { useContext } from "react";
import { SORT_BY_DESCRIPTION, SORT_BY_EMAIL, SORT_BY_PRICE, SORT_BY_TITLE } from "../actions";
import { ItemContext } from "../contexts";

export const useSortItems = () => {
     const context = useContext(ItemContext);
    if (!context) {
        throw new Error(`useItems must be used within a ItemsProvider`);
    }
    const [state, dispatch] = context;

    const handleSortByTitle = () => {
        // sort by title method
        const items = state.items;
        if (typeof dispatch === 'function') {
            dispatch({ type: SORT_BY_TITLE, payload: items});
        }
    };

    const handleSortByDescription = () => {
         // sort by description method
         const items = state.items;
         if (typeof dispatch === 'function') {
            dispatch({ type: SORT_BY_DESCRIPTION, payload: items});
         }
    };

    const handleSortByEmail = () => {
         // sort by email method
         const items = state.items;
         if (typeof dispatch === 'function') {
            dispatch({ type: SORT_BY_EMAIL, payload: items});
         }
    };

    const handleSortByPrice = () => {
        // sort by email method
        const items = state.items;
        if (typeof dispatch === 'function') {
        dispatch({ type: SORT_BY_PRICE, payload: items});
        }
    };

  return {
    handleSortByTitle,
    handleSortByDescription,
    handleSortByEmail,
    handleSortByPrice,
  }
}
