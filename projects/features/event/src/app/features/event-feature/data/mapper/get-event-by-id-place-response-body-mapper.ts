import { Place } from "../../domain/entities/place"
import { GetEventByIdPlaceResponseBody } from "../models/get-event-by-id-response-body"
import { GetEventByIdPlacePostalAddressResponseBodyMapper } from "./get-event-by-id-place-postal-address-response-body-mapper"

export class GetEventByIdPlaceResponseBodyMapper {
    static toPlace(model: GetEventByIdPlaceResponseBody): Place | undefined {
        if (
            model.name === undefined ||
            model.address === undefined
        ) {
            console.warn(`failed to map model to domain: ${model}`);
            return undefined;
        }

        let address = GetEventByIdPlacePostalAddressResponseBodyMapper.toPostalAddress(model.address);

        if (address === undefined) {
            console.warn(`failed to map model to domain: ${model}`);
            return undefined;
        }

        return {
            "@type": "Place",
            name: model.name,
            address: address
        }
    }
}