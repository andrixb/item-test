import { ISearchParams } from '../../infrastructure/interfaces';
import { getItems } from '../../infrastructure/repositories/getItems';

interface fetchItemsBatchProps {
    searchParams?: ISearchParams;
}

export const fetchItemsBatch = async ({ searchParams }: fetchItemsBatchProps) => {
    return getItems({ searchParams });
};
