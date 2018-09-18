import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ITEMS } from '../mock-shoppinglist';
import { ITEMS2 } from '../mock-shoppinglist.2';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})

export class ShoppinglistComponent implements OnInit {
  grocery_lists = [1, 2];

  items = ITEMS;

  constructor() { }

  ngOnInit() {
  }

  addItem(newItem: string) {
    if (newItem) {
      let item = new Item(newItem);
      this.items.push(item);
    }
  }

  switchGroceryList(id: number) {
    if (id == 1) {
      this.items = ITEMS;
    } else if (id == 2) {
      this.items = ITEMS2;
    }
  }

}