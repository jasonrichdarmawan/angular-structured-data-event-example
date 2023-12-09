import { TestBed } from '@angular/core/testing';

import { EventRemoteDataSourceService } from './event-remote-data-source.service';

describe('EventRemoteDataSourceService', () => {
  let service: EventRemoteDataSourceService;

  beforeAll(() => {
    jasmine.clock().install();
  })

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        EventRemoteDataSourceService
      ]
    });
    service = TestBed.inject(EventRemoteDataSourceService);
  });

  afterAll(() => {
    jasmine.clock().uninstall();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
