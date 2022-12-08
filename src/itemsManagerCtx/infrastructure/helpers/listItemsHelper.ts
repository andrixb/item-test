import { ItemType } from '../../domain/entities';
import { ItemsState } from '../interfaces';

export const findItem = async (id: string, itemState: ItemsState) =>
    itemState.items.find((item: ItemType) => item.id === id);

export const findFavorites = async (id: string, itemState: ItemsState) =>
    itemState.favorites?.find((item: ItemType) => item.id === id);

export const removedFavorites = async (id: string, itemState: ItemsState) =>
    itemState.favorites?.filter((item: ItemType) => item.id !== id) ?? [];

export const updateItemsList = async (updatedItem: ItemType, itemsState: ItemsState) => {
    try {
        const index = itemsState.items?.indexOf(updatedItem);
        itemsState.items[index] = updatedItem;
        return itemsState;
    } catch (e) {
        throw new Error(`${e}`);
    }
};

export const findByTitle = async (itemsState: ItemsState, title: string) =>
    itemsState.items?.filter((item: ItemType) => item.title?.toLowerCase().includes(title?.toLowerCase() ?? ''));
