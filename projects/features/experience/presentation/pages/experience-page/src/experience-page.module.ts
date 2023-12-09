import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperiencePageRoutingModule } from './experience-page-routing.module';
import { ExperiencePageComponent } from './experience-page.component';
import { ExperienceRemoteDataSourceService } from '@features/experience/data/datasources/experience-remote-data-source';
import { ExperienceRepositoryService } from '@features/experience/data/repositories/experience-repository';
import { GetExperienceByIdService } from '@features/experience/domain/usecases/get-experience-by-id';


@NgModule({
  declarations: [
    ExperiencePageComponent
  ],
  imports: [
    CommonModule,
    ExperiencePageRoutingModule
  ],
  providers: [
    ExperienceRemoteDataSourceService,
    ExperienceRepositoryService,
    GetExperienceByIdService
  ]
})
export class ExperiencePageModule { }
