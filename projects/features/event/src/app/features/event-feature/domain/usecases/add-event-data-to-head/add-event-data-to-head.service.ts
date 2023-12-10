import { Inject, Injectable } from '@angular/core';
import { EventData } from '../../entities/event-data';
import { DOCUMENT } from '@angular/common';

@Injectable()
export class AddEventDataToHeadService {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  call(eventData: EventData) {
    let element = this.document.createElement('script');
    element.type = 'application/ld+json';
    element.text = JSON.stringify(eventData);

    this.document.head.appendChild(element);
}
}
