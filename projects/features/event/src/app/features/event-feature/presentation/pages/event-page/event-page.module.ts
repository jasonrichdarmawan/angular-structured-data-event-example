import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventPageComponent } from './event-page.component';
import { EventPageRoutingModule } from './event-page-routing.module';
import { GetEventByIdService } from '../../../domain/usecases/get-event-by-id.service';
import { EventRepositoryService } from '../../../data/repositories/event-repository.service';
import { EventRemoteDataSourceService } from '../../../data/datasources/event-remote-data-source.service';
import { AsPipeModule } from '@common/pipes/as-pipe';

@NgModule({
  declarations: [
    EventPageComponent
  ],
  imports: [
    CommonModule,
    EventPageRoutingModule,
    AsPipeModule,
  ],
  providers: [
    EventRemoteDataSourceService,
    EventRepositoryService,
    GetEventByIdService,
  ],
})
export class EventPageModule { }
