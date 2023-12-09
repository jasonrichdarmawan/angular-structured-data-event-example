import { Organization } from "../../domain/entities/organization";
import { GetEventbyIdOrganizationResponseBody } from "../models/get-event-by-id-response-body";

export namespace GetEventbyIdOrganizationResponseBodyMapper {
    export function toOrganization(model: GetEventbyIdOrganizationResponseBody): Organization | undefined {
        if (
            model.name === undefined ||
            model.url === undefined
        ) {
            console.warn(`failed to map model to domain: ${model}`);
            return undefined;
        }

        return {
            "@type": "Organization",
            "name": model.name,
            "url": model.url
        }
    }
}