import { Injectable } from '@angular/core';
import { GetEventByIdResponseBody } from '../models/get-event-by-id-response-body';

@Injectable()
export class EventRemoteDataSourceService {
  events: { [key: string]: GetEventByIdResponseBody | undefined };

  constructor() {
    this.events = {}

    this.events["1"] = {
      id: "1",
      name: "first name",
      description: "first description"
    }

    this.events["2"] = {
      id: "2",
      name: "second name",
    }
  }

  getEventById(id: string): GetEventByIdResponseBody {
    return this.events[id] ?? {}
  }
}
