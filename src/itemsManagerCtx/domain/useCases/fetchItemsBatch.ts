import { getItems } from '../../infrastructure/repositories/getItems';

interface fetchItemsBatchProps {
    page?: number;
}

export const fetchItemsBatch = async ({ page }: fetchItemsBatchProps) => {
    return getItems({ page });
};
