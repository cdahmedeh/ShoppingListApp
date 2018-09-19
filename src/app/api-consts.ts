export const API_URL = 'https://api.mygrocerydeals.com/v2/'
export const API_KEY = 'YqD0bGZYBs7vbF4YGzwA35m0gFRdT17B9L8bn2RC'

export const GEOCODE_URL = 'http://dev.virtualearth.net/REST/v1/'
export const GEOCODE_API_KEY = 'Ar4HBa-48MD4OYr6ARQjA3ErWm8fe69Wan8j97ISSz4EDEbNP3JjJYUhOjOlheyI'

export const USER = 'codechallenge'

export const DEFAULT_SIZE = 1000

export const GET_ALL_LISTS_ENDPOINT = 'lists'
export const CREATE_LIST_ENDPOINT = 'list'
export const DELETE_LIST_ENDPOINT = "list/{id}/delete"
export const GET_SHOPPING_LIST_ENDPONT = 'list/{id}'

export const ADD_ITEM_TO_SHOPPING_LIST_ENDPOINT = 'list/{id}/add'
export const REMOVE_ITEM_TO_SHOPPING_LIST_ENDPOINT = 'list/{id}/remove'

export const GEOCODE_LOOKUP_ENDPOINT = 'Locations?countryRegion=countryRegion&adminDistrict=adminDistrict&locality=locality&postalCode={zip_code}&key=' + GEOCODE_API_KEY

export const DEFAULT_ZIP_CODE = "37188"