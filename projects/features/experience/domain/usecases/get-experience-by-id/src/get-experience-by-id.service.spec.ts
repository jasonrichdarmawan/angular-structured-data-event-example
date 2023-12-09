import { TestBed } from '@angular/core/testing';

import { GetExperienceByIdService } from './get-experience-by-id.service';

describe('GetExperienceByIdService', () => {
  let service: GetExperienceByIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetExperienceByIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
