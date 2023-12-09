import { Injectable } from '@angular/core';
import { EventData } from '../../entities/event-data';

@Injectable()
export class AddEventToHeadService {

  constructor() { }

  call(eventData: EventData) {
    let element = document.createElement('script');
    element.type = 'application/ld+json';
    element.text = JSON.stringify(eventData);

    document.head.appendChild(element);
  }
}
