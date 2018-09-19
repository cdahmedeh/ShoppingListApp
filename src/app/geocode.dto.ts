export interface GeoCodeResponse {
    resourceSets: GeoCodeResponseResourceSet[]
}

export interface GeoCodeResponseResourceSet {
    resources: GeoCodeResponseResource[]
}

export interface GeoCodeResponseResource {
    address: GeoCodeResponseAddress
}

export interface GeoCodeResponseAddress {
    locality: string
}