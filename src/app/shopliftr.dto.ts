/* This script contains typed forms of the JSON respons from the API */

export interface GetAllShoppingListsResponse {
    ["id: string"] : GetAllShoppingListsResponseValue
}

export interface GetAllShoppingListsResponseValue {
"id": string
"name": string
"description": string
"products": GetAllShoppingListsProduct[]
}

export interface GetAllShoppingListsProduct {
"name": string
"item": string
"deals": GetAllShoppingListsDeal[]
}

export interface GetAllShoppingListsDeal {
"name": string
"brand": string
"image_url": string
}

export interface CreateShoppingListResponse {
"listId": string
}

export interface RemoveShoppingListResponse {

}

export interface GetShoppingListResponse {

}

export interface AddItemToShoppingListResponse {

}

export interface RemoveItemFromShoppingListResponse {

}