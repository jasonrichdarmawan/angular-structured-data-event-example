import { PostalAddress } from "./postal-address";

export interface Place {
    "@type": "Place";
    name: string;
    address: PostalAddress;
}