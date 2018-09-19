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
  /* Shopping List model */
  lists: ShoppingLists = new ShoppingLists();

  constructor(public service: ShopliftrService) { }

  ngOnInit() {
    this.populateAllShoppingLists();
  }

  /* Fills the shopping list model based on data from the server */
  populateAllShoppingLists() {
    let self = this;

    this.service.getAllShoppingLists()
        .subscribe(resp => {
          self.lists = ShopliftrMapper.mapGetAllShoppingLists(resp);
          console.log(self.lists);
        }
      );
  }

  /* Shopping List Manipulation methods */
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

  /* Shopping List Items Manipulation methods */
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

  toggleItem(shoppingListId: string, itemId: string) {
    let shoppingList = this.lists.shoppingLists.find(sl => sl.id == shoppingListId);
    if (shoppingList) {
      let item = shoppingList.items.find(i => i.id == itemId)
      if (item) {
        item.toggle();
      }
    }
  }



}