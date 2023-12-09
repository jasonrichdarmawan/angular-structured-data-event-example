import { EventAttendanceModeEnumeration } from "./event-attendance-mode-enumeration";
import { EventStatusType } from "./event-status-type";
import { Offer } from "./offer";
import { Organization } from "./organization";
import { Person } from "./person";
import { PlaceOrVirtualLocation } from "./place-or-virtual-location";

export interface EventData {
    "@context": "https://schema.org";
    "@type": "Event";

    id: string;

    location: PlaceOrVirtualLocation[];
    name: string;
    startDate: string;

    description?: string;
    endDate?: string;
    eventAttendanceMode?: EventAttendanceModeEnumeration;
    eventStatus?: EventStatusType;
    image?: string[];
    offers?: Offer[];
    organizer?: Organization | Person;
    performer?: Person;
    previousStartDate?: string[];
}