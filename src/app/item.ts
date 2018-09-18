export class Item {
    name: string;
    checked: boolean = false;

    constructor(itemName: string) {
        this.name = itemName;
    }

    check() : void {
        this.checked = true;
    }

    uncheck() : void {
        this.checked = false;
    }
}