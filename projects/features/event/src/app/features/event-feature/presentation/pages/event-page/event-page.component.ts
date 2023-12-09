import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetEventByIdService } from '../../../domain/usecases/get-event-by-id/get-event-by-id.service';
import { EventData } from '../../../domain/entities/event-data';
import { Organization } from '../../../domain/entities/organization';
import { Person } from '../../../domain/entities/person';
import { EventStatusType } from '../../../domain/entities/event-status-type';
import { Place } from '../../../domain/entities/place';
import { AddEventToHeadService } from '../../../domain/usecases/add-event-to-head/add-event-to-head.service';
@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.scss']
})
export class EventPageComponent implements OnInit {
  Organization!: Organization;
  Person!: Person;
  EventStatusType!: Place;

  eventData?: EventData;

  constructor(
    route: ActivatedRoute,
    getEventById: GetEventByIdService,
    private addEventToHead: AddEventToHeadService,
  ) {
    let id = route.snapshot.paramMap.get("id") ?? undefined;

    if (id == undefined) { return }

    this.eventData = getEventById.call(id)
  }

  ngOnInit(): void {
    if (this.eventData === undefined) { return undefined }
    this.addEventToHead.call(this.eventData)
  }

}
