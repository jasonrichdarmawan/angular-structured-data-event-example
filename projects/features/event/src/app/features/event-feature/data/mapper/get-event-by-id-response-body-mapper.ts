import { EventAttendanceModeEnumeration } from "../../domain/entities/event-attendance-mode-enumeration";
import { EventData } from "../../domain/entities/event-data";
import { EventStatusType } from "../../domain/entities/event-status-type";
import { Offer } from "../../domain/entities/offer";
import { Organization } from "../../domain/entities/organization";
import { Person } from "../../domain/entities/person";
import { GetEventByIdPersonResponseBody, GetEventByIdResponseBody } from "../models/get-event-by-id-response-body";
import { GetEventByIdOfferResponseBodyMapper } from "./get-event-by-id-offer-response-body-mapper";
import { GetEventbyIdOrganizationResponseBodyMapper } from "./get-event-by-id-organization-response-body-mapper";
import { GetEventByIdPlaceOrVirtualLocationMapper } from "./get-event-by-id-place-or-virtual-location-mapper";

export namespace GetEventByIdResponseBodyMapper {
    export function toEventData(model: GetEventByIdResponseBody): EventData | undefined {
        if (
            model.id === undefined ||
            model.location === undefined ||
            model.name === undefined ||
            model.startDate === undefined
        ) {
            console.warn(`failed to map model to domain: ${model}`);
            return undefined
        }

        let location = GetEventByIdPlaceOrVirtualLocationMapper.toPlaceOrVirtualLocationArray(model.location);
        if (location === undefined) {
            console.warn(`failed to map model to domain: ${model}`);
            return undefined
        }

        let offers: Offer[] | undefined;
        if (model.offers !== undefined) {
            offers = GetEventByIdOfferResponseBodyMapper.toOfferArray(model.offers);
        }

        let eventAttendanceMode: EventAttendanceModeEnumeration | undefined;
        if (model.eventAttendanceMode !== undefined) {
            eventAttendanceMode = toEventAttendanceMode(model.eventAttendanceMode);
        }

        let eventStatus: EventStatusType | undefined;
        if (model.eventStatus !== undefined) {
            eventStatus = toEventStatus(model.eventStatus);
        }

        let organizer: Organization | undefined;
        if (model.organizer !== undefined) {
            organizer = GetEventbyIdOrganizationResponseBodyMapper.toOrganization(model.organizer);
        }

        let performer: Person | undefined;
        if (model.performer !== undefined) {
            performer = toPerson(model.performer);
        }

        let previousStartDate: string[] | undefined;
        if (model.previousStartDate !== undefined) {
            previousStartDate = toArray(model.previousStartDate);
        }

        let result: EventData = {
            "@context": "https://schema.org",
            "@type": "Event",

            id: model.id,

            location: location,

            name: model.name,
            startDate: model.startDate,

            description: model.description,
            endDate: model.endDate,

            eventAttendanceMode: eventAttendanceMode,
            eventStatus: eventStatus,
            
            image: model.image,

            offers: offers,

            organizer: organizer,

            performer: performer,

            previousStartDate: previousStartDate
        }

        return result;
    }

    function toEventAttendanceMode(model: string): EventAttendanceModeEnumeration | undefined {
        let result: EventAttendanceModeEnumeration

        switch (model) {
            case "https://schema.org/OfflineEventAttendanceMode":
                result = model;
                break;
            case "https://schema.org/OnlineEventAttendanceMode":
                result = model;
                break;
            case "https://schema.org/MixedEventAttendanceMode":
                result = model;
                break;
            default:
                console.warn(`failed to map model to domain: ${model}`);
                return undefined;
        }

        return result;
    }

    function toEventStatus(model: string): EventStatusType | undefined {
        let result: EventStatusType
        
        switch (model) {
            case "https://schema.org/EventCancelled":
                result = model;
                break;
            case "https://schema.org/EventMovedOnline":
                result = model;
                break;
            case "https://schema.org/EventPostponed":
                result = model;
                break;
            case "https://schema.org/EventRescheduled":
                result = model;
                break;
            case "https://schema.org/EventScheduled":
                result = model;
                break;
            default: 
                console.warn(`failed to map model to domain: ${model}`);
                return undefined;
        }

        return result;
    }

    function toPerson(model: GetEventByIdPersonResponseBody): Person | undefined {
        if (model.name === undefined) { 
            console.warn(`failed to map model to domain: ${model}`);
            return undefined
        }

        return {
            "@type": "PerformingGroup",
            name: model.name
        }
    }

    function toArray(model: any | any[]): string[] {
        return ([] as any[]).concat(model);
    }
}