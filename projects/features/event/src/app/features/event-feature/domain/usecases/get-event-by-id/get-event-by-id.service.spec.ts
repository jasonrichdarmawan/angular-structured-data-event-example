import { TestBed } from '@angular/core/testing';

import { GetEventByIdService } from './get-event-by-id.service';

describe('GetEventByIdService', () => {
  let service: GetEventByIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetEventByIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
