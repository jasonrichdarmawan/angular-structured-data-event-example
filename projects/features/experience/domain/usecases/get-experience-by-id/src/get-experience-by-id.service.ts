import { Injectable } from '@angular/core';
import { ExperienceRepositoryService } from '@features/experience/data/repositories/experience-repository';
import { ExperienceData } from '@features/experience/domain/entities/experience-data';

@Injectable()
export class GetExperienceByIdService {

  constructor(private repository: ExperienceRepositoryService) { }

  call(id: string): ExperienceData | undefined {
    return this.repository.getExperienceById(id)
  }
}
