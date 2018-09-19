/* Domain Models */

export class ShoppingLists {
    shoppingLists: ShoppingList[] = [];
}

export class ShoppingList {
    id: string;
    name: string;
    items: Item[] = [];

    constructor(listId: string, listName: string) {
        this.id = listId;
        this.name = listName;
    }
}

export class Item {
    id: string;
    name: string;
    checked: boolean = false;
    deals: Deal[] = [];

    constructor(itemId: string, itemName: string) {
        this.id = itemId;
        this.name = itemName;
    }

    toggle() : void {
        this.checked = !this.checked;
    }
}

export class Deal {
    name: string
    brand: string
    imageUrl: string

    constructor(dealName: string, dealBrand: string, dealImage: string) {
        this.name = dealName;
        this.brand = dealBrand;
        this.imageUrl = dealImage;
    }
}