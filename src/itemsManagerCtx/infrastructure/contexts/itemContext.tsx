import { createContext, Dispatch, useMemo, useReducer } from 'react';
import { combineReducers } from '../../../shared/infrastructure/utils/combineReducers';
import { ItemsActionTypes } from '../actions';
import { ItemsState } from '../interfaces';
import { itemsReducer, favoritesReducer } from '../reducers';

interface ItemProviderProps {
    children: JSX.Element;
}

export const itemsInitialState: ItemsState = {
    items: [],
    favorites: [],
};

const ItemContext = createContext<(Dispatch<ItemsActionTypes> | ItemsState)[] | null>(null);

// const rootReducer = combineReducers({ itemsReducer, favoritesReducer });

const ItemProvider = ({ children }: ItemProviderProps) => {
    const [state, dispatch] = useReducer(itemsReducer, itemsInitialState);
    const store = useMemo(() => [state, dispatch], [state]);
    return <ItemContext.Provider value={store}>{children}</ItemContext.Provider >;
};

export { ItemContext, ItemProvider };
