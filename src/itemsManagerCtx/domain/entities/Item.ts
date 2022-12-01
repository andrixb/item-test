import { uuid } from 'uuidv4';
import { Properties } from '../../../shared/infrastructure/types/FunctionPropertiesType';

export interface IItem {
    title?: string;
    description?: string;
    price?: string;
    email?: string;
    image?: string;
}

export class Item {
    id: string;
    title?: string;
    description?: string;
    price?: string;
    email?: string;
    image?: string;
    isFavorite?: boolean;

    constructor({ ...params }: IItem) {
        this.id = uuid();
        this.isFavorite = false;
        Object.assign(this, params);
    }
}

export type ItemType = Properties<Item>;
