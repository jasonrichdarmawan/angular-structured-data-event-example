import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventPageComponent } from './event-page.component';
import { EventPageRoutingModule } from './event-page-routing.module';



@NgModule({
  declarations: [
    EventPageComponent
  ],
  imports: [
    CommonModule,
    EventPageRoutingModule
  ]
})
export class EventPageModule { }
