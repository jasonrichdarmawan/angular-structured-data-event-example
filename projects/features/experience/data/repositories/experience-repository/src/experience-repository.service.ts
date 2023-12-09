import { Injectable } from '@angular/core';
import { ExperienceRemoteDataSourceService } from '@features/experience/data/datasources/experience-remote-data-source';
import { ExperienceData } from '@features/experience/domain/entities/experience-data';

@Injectable()
export class ExperienceRepositoryService {

  constructor(private dataSource: ExperienceRemoteDataSourceService) { }

  getExperienceById(id: string): ExperienceData | undefined {
    let response = this.dataSource.getExperienceById(id)

    if (response.id == undefined || response.name == undefined) {
      return undefined
    }

    let result: ExperienceData = {
      id: response.id,
      name: response.name,
      events: response.events
    }

    return result
  }
}
