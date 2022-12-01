import { createContext, Dispatch, useMemo, useReducer } from 'react';
import { ItemType } from '../../domain/entities';
import { ItemsActionTypes } from '../actions';
import { itemsInitialState, itemsReducer } from '../reducers';

interface ItemProviderProps {
    children: JSX.Element;
}

const ItemContext = createContext<(Dispatch<ItemsActionTypes> | { items: ItemType[]; })[] | null>(null);

const ItemProvider = ({ children }: ItemProviderProps) => {
    const [state, dispatch] = useReducer(itemsReducer, itemsInitialState);
    const store = useMemo(() => [state, dispatch], [state]);
    return <ItemContext.Provider value={store}>{children}</ItemContext.Provider >;
};

export { ItemContext, ItemProvider };
