import { IItem } from '../../domain/entities';

export interface ItemsResponsePayload {
    data: {
        items: IItem[];
    };
}
