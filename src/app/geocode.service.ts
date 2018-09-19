import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http'


import { GeoCodeResponse } from './geocode.dto';

import { GEOCODE_URL, GEOCODE_LOOKUP_ENDPOINT } from './api-consts'

@Injectable({
  providedIn: 'root'
})
export class GeocodeService {

  constructor(private http: HttpClient) { }

  getLocationFromZipcode(zipcode: string): Observable<GeoCodeResponse> {
    let url = GEOCODE_URL + GEOCODE_LOOKUP_ENDPOINT.replace('{zip_code}', zipcode);

    return this.http.get<GeoCodeResponse>(url);
  }
}
