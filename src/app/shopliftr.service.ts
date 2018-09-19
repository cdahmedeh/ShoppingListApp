import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { API_URL, API_KEY, USER, DEFAULT_SIZE, DELETE_LIST_ENDPOINT } from './api-consts';

import { GET_ALL_LISTS_ENDPOINT, CREATE_LIST_ENDPOINT } from './api-consts';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const headers = new HttpHeaders({
  'x-api-key': API_KEY
})

interface GetAllShoppingListsResponse {
  ["id: string"] : GetAllShoppingListsResponseValue
}

interface GetAllShoppingListsResponseValue {
  "id": string
  "name": string
  "description": string
}

interface CreateShoppingListResponse {
  listId: string
}

@Injectable({
  providedIn: 'root'
})
export class ShopliftrService {

  constructor(private http: HttpClient) { }

  getAllShoppingLists(): Observable<GetAllShoppingListsResponse> {
    let body = {
      "user": USER,
      "from": 0,
      "to": DEFAULT_SIZE
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

  removeShoppingList(id: string): Observable<CreateShoppingListResponse> {
    let body = {
      "user": USER
    }

    let url = API_URL + DELETE_LIST_ENDPOINT.replace('{id}', id);

    return this.http.post<CreateShoppingListResponse>
      (url, body, {headers: headers});
  }
}
