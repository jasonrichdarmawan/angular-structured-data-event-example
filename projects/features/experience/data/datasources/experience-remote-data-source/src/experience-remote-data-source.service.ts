import { Injectable } from '@angular/core';
import { GetExperienceByIdResponseBody } from '@features/experience/data/models/get-experience-by-id-response-body';

@Injectable()
export class ExperienceRemoteDataSourceService {
  experiences: { [key: string]: GetExperienceByIdResponseBody | undefined };

  constructor() {
    this.experiences = {};
    this.experiences["1"] = {
      id: "1",
      name: "name 1",
      description: "description 1",
      events: ["1", "2"],
    };
    this.experiences["2"] = {
      id: "2",
      name: "name 2",
    };
  }

  getExperienceById(id: string): GetExperienceByIdResponseBody {
    return this.experiences[id] ?? {}
  }
}
