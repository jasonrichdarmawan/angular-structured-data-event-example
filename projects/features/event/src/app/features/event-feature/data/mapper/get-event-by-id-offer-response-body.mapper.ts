import { Offer } from "../../domain/entities/offer";
import { OfferAvailability } from "../../domain/entities/offer-availability";
import { GetEventByIdOfferResponseBody } from "../models/get-event-by-id-response-body";

export namespace GetEventByIdOfferResponseBodyMapper {
    export function toOfferArray(model: GetEventByIdOfferResponseBody | GetEventByIdOfferResponseBody[]): Offer[] | undefined {
        let result: Offer[];

        if (Array.isArray(model)) {
            result = [];
            for (const item of model) {
                let tempResult = toOffer(item);

                if (tempResult === undefined) {
                    console.warn(`failed to map model to domain: ${model}`);
                    break;
                }

                result.push(tempResult)
            }
        } else {
            let tempResult = toOffer(model);

            if (tempResult === undefined) {
                console.warn(`failed to map model to domain: ${model}`);
                return undefined
            }

            result = [];
            result.push(tempResult);
        }

        return result;
    }

    function toOffer(model: GetEventByIdOfferResponseBody): Offer | undefined {
        if (
            model.availability === undefined ||
            model.price === undefined ||
            model.priceCurrency === undefined ||
            model.validFrom === undefined ||
            model.url === undefined
        ) {
            console.warn(`failed to map model to domain: ${model}`);
            return undefined;
        }

        let availability = toOfferAvailability(model.availability)

        if (availability === undefined) {
            console.warn(`failed to map model to domain: ${model.availability}`)
            return undefined;
        }

        return {
            "@type": "Offer",
            availability: availability,
            price: model.price,
            priceCurrency: model.priceCurrency,
            validFrom: model.validFrom,
            url: model.url,
        }
    }

    function toOfferAvailability(model: string): OfferAvailability | undefined {
        let result: OfferAvailability

        switch (model) {
            case "https://schema.org/InStock":
                result = model;
                break;
            case "https://schema.org/SoldOut":
                result = model;
                break;
            case "https://schema.org/PreOrder":
                result = model;
                break;
            default:
                console.warn(`failed to map model to domain: ${model}`)
                return undefined
        }

        return result
    }
}