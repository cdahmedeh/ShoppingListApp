import { Component, OnInit } from '@angular/core';

import { ShopliftrService } from '../shopliftr.service';
import { ShopliftrMapper } from '../shopliftr.mapper';

import { ShoppingLists, ShoppingList, Item } from '../models';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})

export class ShoppinglistComponent implements OnInit {
  lists: ShoppingLists = new ShoppingLists();

  items = [];

  constructor(public service: ShopliftrService) { }

  ngOnInit() {
    this.populateAllShoppingLists();
  }

  populateAllShoppingLists() {
    let self = this;

    this.service.getAllShoppingLists()
        .subscribe(resp => {
          self.lists = ShopliftrMapper.mapGetAllShoppingLists(resp);
          console.log(self.lists);
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

  addItem(listId: string, itemName: string) {
    this.service.addItemToShoppingList(listId, itemName)
        .subscribe(resp => {
          this.populateAllShoppingLists();
        });
  }

  removeItem(listId: string, itemId: string) {
    this.service.removeItemFromShoppingList(listId, itemId)
        .subscribe(resp => {
          this.populateAllShoppingLists();
        });
  }

  crossOut(name: string) {
    let item = this.items.find(x => x.name == name);
    item.check();
  }



}