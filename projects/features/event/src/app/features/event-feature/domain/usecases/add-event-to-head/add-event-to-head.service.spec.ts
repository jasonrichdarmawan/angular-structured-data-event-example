import { TestBed } from '@angular/core/testing';

import { AddEventToHeadService } from './add-event-to-head.service';

describe('AddEventToHeadService', () => {
  let service: AddEventToHeadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddEventToHeadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
