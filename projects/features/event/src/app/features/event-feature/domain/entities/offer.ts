import { OfferAvailability } from "./offer-availability";

export interface Offer {
    "@type": "Offer";
    availability: OfferAvailability;
    price: string;
    priceCurrency: string;
    validFrom: string;
    url: string;
}