export interface GetEventByIdResponseBody {
    id?: string

    location?: GetEventByIdPlaceOrVirtualLocation | GetEventByIdPlaceOrVirtualLocation[]

    name?: string;

    startDate?: string;

    description?: string;

    endDate?: string;

    eventAttendanceMode?: string;

    eventStatus?: string;

    image?: string[];

    offers?: GetEventByIdOfferResponseBody | GetEventByIdOfferResponseBody[]

    organizer?: GetEventbyIdOrganizationResponseBody | GetEventByIdPersonResponseBody;
    performer?: GetEventByIdPersonResponseBody;
    previousStartDate?: string | string[];
}

export type GetEventByIdPlaceOrVirtualLocation = GetEventByIdPlaceResponseBody | GetEventByIdVirtualLocationResponseBody

export interface GetEventByIdVirtualLocationResponseBody {
    "@type"?: "VirtualLocation";
    "url"?: string;
}

export interface GetEventByIdPlaceResponseBody {
    "@type"?: "Place";
    name?: string;
    address?: GetEventByIdPlacePostalAddressResponseBody
}

export interface GetEventByIdPlacePostalAddressResponseBody {
    "@type"?: "PostalAddress";
    streetAddress?: string;
    addressLocality?: string;
    postalCode?: string;
    addressRegion?: string;
    addressCountry?: string;
}

export interface GetEventByIdOfferResponseBody {
    "@type"?: "Offer";
    availability?: string;
    price?: string;
    priceCurrency?: string;
    validFrom?: string;
    url?: string;
}
export interface GetEventbyIdOrganizationResponseBody {
    name?: string;
    url?: string;
}

export interface GetEventByIdPersonResponseBody {
    "@type"?: string;
    name?: string;
}
