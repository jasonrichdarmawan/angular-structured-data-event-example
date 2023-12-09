import { TestBed } from '@angular/core/testing';

import { ExperienceRepositoryService } from './experience-repository.service';
import { ExperienceRemoteDataSourceService } from '@features/experience/data/datasources/experience-remote-data-source';

describe('ExperienceRepositoryService', () => {
  let service: ExperienceRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ExperienceRemoteDataSourceService,
        ExperienceRepositoryService,
      ]
    });
    service = TestBed.inject(ExperienceRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
