import { Component, OnInit } from '@angular/core';

import { ShopliftrService } from '../shopliftr.service';

import { ShoppingLists } from '../shoppinglists';

import { Item } from '../item';
import { ITEMS } from '../mock-shoppinglist';
import { ITEMS2 } from '../mock-shoppinglist.2';
import { ShoppingList } from '../shoppinglist';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})

export class ShoppinglistComponent implements OnInit {
  lists: ShoppingLists = new ShoppingLists();

  grocery_lists = [1, 2];

  items = ITEMS;

  constructor(public service: ShopliftrService) { }

  ngOnInit() {
    this.populateAllShoppingLists();
  }

  populateAllShoppingLists() {
    let self = this;

    this.lists.shoppingLists = [];

    this.service.getAllShoppingLists()
        .subscribe(resp => {
          Object.keys(resp).forEach(
            function(key) {
              let value = resp[key];
              self.lists.shoppingLists.unshift(new ShoppingList(key, value.name))
            }
          )
        }
      );
  }

  addShoppingList(name: string) {
    this.service.createShoppingList(name)
        .subscribe(resp => {
          this.populateAllShoppingLists();
        });
  }

  removeShoppingList(id: string) {
    this.service.removeShoppingList(id)
        .subscribe(resp => {
          this.populateAllShoppingLists();
        });
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

  crossOut(name: string) {
    let item = this.items.find(x => x.name == name);
    item.check();
  }

  remove(name: string) {
    this.items = this.items.filter(x => x.name != name);
  }

}