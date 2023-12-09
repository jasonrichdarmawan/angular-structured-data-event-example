import { PostalAddress } from "../../domain/entities/postal-address";
import { GetEventByIdPlacePostalAddressResponseBody } from "../models/get-event-by-id-response-body";

export namespace GetEventByIdPlacePostalAddressResponseBodyMapper {
    export function toPostalAddress(model: GetEventByIdPlacePostalAddressResponseBody): PostalAddress | undefined {
        if (
            model.streetAddress === undefined ||
            model.addressLocality === undefined ||
            model.addressCountry === undefined
        ) {
            console.warn(`failed to map model to domain: ${model}`);
            return undefined;
        }

        return {
            "@type": "PostalAddress",
            streetAddress: model.streetAddress,
            addressLocality: model.addressLocality,
            postalCode: model.postalCode,
            addressCountry: model.addressCountry,
            addressRegion: model.addressRegion
        }
    }
}