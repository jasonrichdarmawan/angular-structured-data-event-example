import { Injectable } from '@angular/core';
import { EventRemoteDataSourceService } from '../datasources/event-remote-data-source.service';
import { EventData } from '../../domain/entities/event-data';

@Injectable()
export class EventRepositoryService {

  constructor(private dataSource: EventRemoteDataSourceService) { }

  getEventById(id: string): EventData | undefined {
    let response = this.dataSource.getEventById(id)

    if (response.id == undefined || response.name == undefined) {
      return undefined
    }

    let result: EventData = { 
      id: response.id,
      name: response.name
    }

    return result;
  }
}
