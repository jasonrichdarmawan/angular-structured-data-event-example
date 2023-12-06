import { Injectable } from '@angular/core';
import { EventData } from '../entities/event-data';
import { EventRepositoryService } from '../../data/repositories/event-repository.service';

@Injectable()
export class GetEventByIdService {

  constructor(private repository: EventRepositoryService) { }

  call(id: string): EventData | undefined {
    let response = this.repository.getEventById(id);

    return response
  }
}
