import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperiencesPageRoutingModule } from './experiences-page-routing.module';
import { ExperiencesPageComponent } from './experiences-page.component';


@NgModule({
  declarations: [
    ExperiencesPageComponent
  ],
  imports: [
    CommonModule,
    ExperiencesPageRoutingModule
  ]
})
export class ExperiencesPageModule { }
