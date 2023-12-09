import { TestBed } from '@angular/core/testing';

import { EventRepositoryService } from './event-repository.service';
import { EventRemoteDataSourceService } from '../datasources/event-remote-data-source.service';

describe('EventRepositoryService', () => {
  let service: EventRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        EventRemoteDataSourceService,
        EventRepositoryService,
      ]
    });
    service = TestBed.inject(EventRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
