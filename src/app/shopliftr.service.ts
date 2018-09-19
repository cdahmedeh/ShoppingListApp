import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http'

import { API_URL, API_KEY, USER, DEFAULT_SIZE, DEFAULT_ZIP_CODE } from './api-consts';

import { GET_ALL_LISTS_ENDPOINT, CREATE_LIST_ENDPOINT, DELETE_LIST_ENDPOINT, GET_SHOPPING_LIST_ENDPONT } from './api-consts';
import { ADD_ITEM_TO_SHOPPING_LIST_ENDPOINT, REMOVE_ITEM_TO_SHOPPING_LIST_ENDPOINT } from './api-consts';

import { AddItemToShoppingListResponse, CreateShoppingListResponse, GetAllShoppingListsResponse, 
  GetShoppingListResponse, RemoveItemFromShoppingListResponse, RemoveShoppingListResponse } from './shopliftr.dto'

const headers = new HttpHeaders({
  'x-api-key': API_KEY
})

@Injectable({
  providedIn: 'root'
})
export class ShopliftrService {

  constructor(private http: HttpClient) { }

  getAllShoppingLists(zipcode: string): Observable<GetAllShoppingListsResponse> {
    if (zipcode == "") {
      zipcode = DEFAULT_ZIP_CODE;
    }
   
    let body = {
      "user": USER,
      "from": 0,
      "to": DEFAULT_SIZE,
      "filter": { "location" : { "zip": zipcode } }
    }

    return this.http.post<GetAllShoppingListsResponse>
      (API_URL + GET_ALL_LISTS_ENDPOINT, body, {headers: headers});
  }

  createShoppingList(name: string): Observable<CreateShoppingListResponse> {
    let body = {
      "user": USER,
      "name": name,
      "description": name
    }

    return this.http.post<CreateShoppingListResponse>
      (API_URL + CREATE_LIST_ENDPOINT, body, {headers: headers});
  }

  removeShoppingList(id: string): Observable<RemoveShoppingListResponse> {
    let body = {
      "user": USER
    }

    let url = API_URL + DELETE_LIST_ENDPOINT.replace('{id}', id);

    return this.http.post<RemoveShoppingListResponse>
      (url, body, {headers: headers});
  }

  getShoppingList(id: string): Observable<GetShoppingListResponse> {
    let body = {
      "user": USER,
      "from": 0,
      "to": DEFAULT_SIZE
    }

    let url = API_URL + GET_SHOPPING_LIST_ENDPONT.replace('{id}', id);

    return this.http.post<GetShoppingListResponse>
      (url, body, {headers: headers});
  }

  addItemToShoppingList(id: string, item: string): Observable<AddItemToShoppingListResponse> {
    let body = {
      "user": USER,
      "items": [ { "name": item } ]
    }

    let url = API_URL + ADD_ITEM_TO_SHOPPING_LIST_ENDPOINT.replace('{id}', id);

    return this.http.post<AddItemToShoppingListResponse>
      (url, body, {headers: headers});
  }

  removeItemFromShoppingList(id: string, item: string): Observable<RemoveItemFromShoppingListResponse> {
    let body = {
      "user": USER,
      "item": item
    }

    let url = API_URL + REMOVE_ITEM_TO_SHOPPING_LIST_ENDPOINT.replace('{id}', id);

    return this.http.post<RemoveItemFromShoppingListResponse>
      (url, body, {headers: headers});
  }
}
