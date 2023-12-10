import { TestBed } from '@angular/core/testing';

import { AddEventDataToHeadService } from './add-event-data-to-head.service';

describe('AddEventDataToHeadService', () => {
  let service: AddEventDataToHeadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddEventDataToHeadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
