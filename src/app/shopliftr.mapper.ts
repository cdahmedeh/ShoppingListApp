/* This script converts JSON models into Domain models */

import { GetAllShoppingListsResponse } from './shopliftr.dto'

import { ShoppingLists, ShoppingList, Item, Deal } from './models';

export class ShopliftrMapper {
    static mapGetAllShoppingLists (response: GetAllShoppingListsResponse): ShoppingLists {
        let lists = new ShoppingLists();

        Object.keys(response).forEach(
            function(key) {
              let value = response[key];

              let list = new ShoppingList(value.id, value.name);
              lists.shoppingLists.unshift(list);

              value.products.forEach(p => {
                let item = new Item(p.id, p.name);
                list.items.unshift(item);

                if (p.deals) {
                    p.deals.forEach(d => {
                        let deal = new Deal(d.name, d.brand, d.image_url);
                        item.deals.unshift(deal);
                    });
                }
              });
            }
          )

        return lists;
    }
}