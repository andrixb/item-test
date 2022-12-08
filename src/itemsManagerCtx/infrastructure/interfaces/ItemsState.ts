import { ItemType } from '../../domain/entities';

export interface ItemsState {
    items: ItemType[];
    favorites: ItemType[];
}
