import { Injectable } from '@angular/core';
import { EventRemoteDataSourceService } from '../datasources/event-remote-data-source.service';
import { EventData } from '../../domain/entities/event-data';
import { GetEventByIdResponseBodyMapper } from '../mapper/get-event-by-id-response-body-mapper';

@Injectable()
export class EventRepositoryService {

  constructor(private dataSource: EventRemoteDataSourceService) { }

  getEventById(id: string): EventData | undefined {
    let response = this.dataSource.getEventById(id);

    return GetEventByIdResponseBodyMapper.toEventData(response);
  }
}
