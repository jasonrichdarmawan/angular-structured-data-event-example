import { TestBed } from '@angular/core/testing';

import { GetExperienceByIdService } from './get-experience-by-id.service';
import { ExperienceRemoteDataSourceService } from '@features/experience/data/datasources/experience-remote-data-source';
import { ExperienceRepositoryService } from '@features/experience/data/repositories/experience-repository';

describe('GetExperienceByIdService', () => {
  let service: GetExperienceByIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ExperienceRemoteDataSourceService,
        ExperienceRepositoryService,
        GetExperienceByIdService
      ]
    });
    service = TestBed.inject(GetExperienceByIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
