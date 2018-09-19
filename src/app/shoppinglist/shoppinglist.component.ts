import { Component, OnInit, Input } from '@angular/core';

import { ShopliftrService } from '../shopliftr.service';
import { ShopliftrMapper } from '../shopliftr.mapper';
import { GeocodeService } from '../geocode.service';
import { GeocodeMapper } from '../geocode.mapper';

import { ShoppingLists } from '../models';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})

export class ShoppinglistComponent implements OnInit {
  /* Zipcode and location information */
  zipcode = '';
  location = 'Please enter Zipcode'

  /* Shopping List model */
  lists: ShoppingLists = new ShoppingLists();

  constructor(public service: ShopliftrService, public geocodeService: GeocodeService) { }

  ngOnInit() {
    this.populateAllShoppingLists();
  }

  /* Fills the shopping list model based on data from the server */
  populateAllShoppingLists() {
    let self = this;

    this.service.getAllShoppingLists(self.zipcode)
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
  addItem(shoppingListId: string, itemName: string) {
    this.service.addItemToShoppingList(shoppingListId, itemName)
        .subscribe(resp => {
          this.populateAllShoppingLists();
        });
  }

  removeItem(shoppingListId: string, itemId: string) {
    this.service.removeItemFromShoppingList(shoppingListId, itemId)
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

  getLocationFromZipcode() {
    let self = this; 
    this.geocodeService.getLocationFromZipcode(self.zipcode)
        .subscribe(resp => {
          self.location = GeocodeMapper.getAddressFromGeocodeResponse(resp);
          console.log(self.location);
        });
  }

  onKey(event: any) {
    this.zipcode = event.target.value;
  }

}