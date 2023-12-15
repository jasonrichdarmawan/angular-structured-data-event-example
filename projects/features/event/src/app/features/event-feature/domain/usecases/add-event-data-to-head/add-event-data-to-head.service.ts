import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { EventData } from '../../entities/event-data';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

@Injectable()
export class AddEventDataToHeadService {
  private isBrowser: boolean;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) platformID: Object,
  ) {
    this.isBrowser = isPlatformBrowser(platformID);
  }

  call(eventData: EventData) {
    if (this.isBrowser) { return }

    let element = this.document.createElement('script');
    element.type = 'application/ld+json';
    element.text = JSON.stringify(eventData);

    this.document.head.appendChild(element);
}
}
