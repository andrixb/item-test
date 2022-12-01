import { createContext, useMemo, useReducer } from 'react';
import { itemsInitialState, itemsReducer } from '../reducers';

interface ItemProviderProps {
    children: JSX.Element;
}

const ItemContext = createContext(null);

const ItemProvider = ({ children }: ItemProviderProps) => {
    const [state, dispatch] = useReducer(itemsReducer, itemsInitialState);
    const store = useMemo(() => [state, dispatch], [state]);
    return <ItemContext.Provider value={store}>{children}</ItemContext.Provider >;
};

export { ItemContext, ItemProvider };
