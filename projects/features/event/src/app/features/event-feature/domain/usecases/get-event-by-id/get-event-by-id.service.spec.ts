import { TestBed } from '@angular/core/testing';

import { GetEventByIdService } from './get-event-by-id.service';
import { EventRemoteDataSourceService } from '../../../data/datasources/event-remote-data-source.service';
import { EventRepositoryService } from '../../../data/repositories/event-repository.service';

describe('GetEventByIdService', () => {
  let service: GetEventByIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        EventRemoteDataSourceService,
        EventRepositoryService,
        GetEventByIdService
      ]
    });
    service = TestBed.inject(GetEventByIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
