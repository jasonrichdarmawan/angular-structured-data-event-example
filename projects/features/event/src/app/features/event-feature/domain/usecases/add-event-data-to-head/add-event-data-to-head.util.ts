import { EventData } from "../../entities/event-data";

export function addEventDataToHead(eventData: EventData) {
    let element = document.createElement('script');
    element.type = 'application/ld+json';
    element.text = JSON.stringify(eventData);

    document.head.appendChild(element);
}