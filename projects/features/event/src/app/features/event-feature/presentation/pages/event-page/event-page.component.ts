import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetEventByIdService } from '../../../domain/usecases/get-event-by-id/get-event-by-id.service';
import { EventData } from '../../../domain/entities/event-data';
import { Organization } from '../../../domain/entities/organization';
import { Person } from '../../../domain/entities/person';
import { EventStatusType } from '../../../domain/entities/event-status-type';
import { Place } from '../../../domain/entities/place';
@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.scss']
})
export class EventPageComponent implements OnInit {
  Organization!: Organization;
  Person!: Person;
  EventStatusType!: Place;

  event?: EventData;

  constructor(
    route: ActivatedRoute,
    getEventById: GetEventByIdService,
  ) {
    let id = route.snapshot.paramMap.get("id") ?? undefined;

    if (id == undefined) { return }

    this.event = getEventById.call(id)
  }

  ngOnInit(): void {
  }

}
