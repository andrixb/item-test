import { ItemProvider } from '../../src/itemsManagerCtx/infrastructure/contexts';
import ItemsManagerPageHome from '../../src/itemsManagerCtx/ui';

const ItemsManagerPage = () => {
    return (
        <ItemProvider>
            <ItemsManagerPageHome />
        </ItemProvider>
    );
};

export default ItemsManagerPage;
