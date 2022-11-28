import { createContext, useMemo, useReducer } from 'react';
import { ItemsActionTypes } from '../actions';
import { itemsInitialState, itemsReducer } from '../reducers';

interface ItemProviderProps {
    children: JSX.Element;
}
const defaultContext = [itemsInitialState, (action: ItemsActionTypes) => {}];
const ItemContext = createContext(defaultContext);

const ItemProvider = ({ children }: ItemProviderProps) => {
    const [state, dispatch] = useReducer(itemsReducer, itemsInitialState);
    const store = useMemo(() => [state, dispatch], [state]);
    return <ItemContext.Provider value={store}>{children}</ItemContext.Provider >;
};

export { ItemContext, ItemProvider };
