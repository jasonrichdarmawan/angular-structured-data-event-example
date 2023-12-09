export interface PostalAddress {
    "@type": "PostalAddress";
    streetAddress: string;
    addressLocality: string;
    postalCode?: string;
    addressRegion?: string;
    addressCountry: string;
}