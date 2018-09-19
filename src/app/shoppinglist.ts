import { Item } from "./item";

export class ShoppingList {
    id: string;
    name: string;
    items: Item[];

    constructor(listId: string, listName: string) {
        this.id = listId;
        this.name = listName;
    }
}