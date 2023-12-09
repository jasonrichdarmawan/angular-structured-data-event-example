import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExperienceData } from '@features/experience/domain/entities/experience-data';
import { GetExperienceByIdService } from '@features/experience/domain/usecases/get-experience-by-id';

@Component({
  selector: 'lib-experience-page',
  templateUrl: './experience-page.component.html',
  styleUrls: ['./experience-page.component.css']
})
export class ExperiencePageComponent implements OnInit {
  experienceData?: ExperienceData;

  constructor(
    route: ActivatedRoute,
    getExperienceById: GetExperienceByIdService,
  ) {
    let id = route.snapshot.paramMap.get("id") ?? undefined;

    if (id == undefined) { return }

    this.experienceData = getExperienceById.call(id)
  }

  ngOnInit(): void {
  }

}
