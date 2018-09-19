/* This script converts JSON models into Domain models */

import { GeoCodeResponse } from './geocode.dto';

export class GeocodeMapper {
    static getAddressFromGeocodeResponse (response: GeoCodeResponse): string {
        if (response.resourceSets.length > 0) {
            let resourceSet = response.resourceSets[0];
            if (resourceSet.resources.length > 0) {
                let resource = resourceSet.resources[0];
                if (resource.address) {
                    if (resource.address.locality) {
                        return resource.address.locality;
                    }
                }
            }
        }

        return "No Address Found";
    }
}