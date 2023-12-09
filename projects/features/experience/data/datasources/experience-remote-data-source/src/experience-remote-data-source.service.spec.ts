import { TestBed } from '@angular/core/testing';

import { ExperienceRemoteDataSourceService } from './experience-remote-data-source.service';

describe('ExperienceRemoteDataSourceService', () => {
  let service: ExperienceRemoteDataSourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ExperienceRemoteDataSourceService
      ]
    });
    service = TestBed.inject(ExperienceRemoteDataSourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
