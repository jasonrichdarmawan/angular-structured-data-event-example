import { TestBed } from '@angular/core/testing';

import { EventRemoteDataSourceService } from './event-remote-data-source.service';

describe('EventRemoteDataSourceService', () => {
  let service: EventRemoteDataSourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventRemoteDataSourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
