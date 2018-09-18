import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ITEMS } from '../mock-shoppinglist';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})

export class ShoppinglistComponent implements OnInit {
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

}