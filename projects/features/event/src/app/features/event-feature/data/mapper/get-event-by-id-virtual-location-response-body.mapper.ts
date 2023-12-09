import { VirtualLocation } from "../../domain/entities/virtual-location";
import { GetEventByIdVirtualLocationResponseBody } from "../models/get-event-by-id-response-body";

export namespace GetEventByIdVirtualLocationResponseBodyMapper {
    export function toVirtualLocation(model: GetEventByIdVirtualLocationResponseBody): VirtualLocation | undefined {
        if (model.url === undefined) {
            console.warn(`failed to map model to domain ${model}`);
            return undefined;
        }

        return {
            "@type": "VirtualLocation",
            url: model.url
        }
    }
}