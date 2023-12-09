import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventPageComponent } from './event-page.component';
import { GetEventByIdService } from '../../../domain/usecases/get-event-by-id/get-event-by-id.service';
import { EventRemoteDataSourceService } from '../../../data/datasources/event-remote-data-source.service';
import { EventRepositoryService } from '../../../data/repositories/event-repository.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('EventPageComponent', () => {
  let component: EventPageComponent;
  let fixture: ComponentFixture<EventPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventPageComponent ],
      imports: [
        RouterTestingModule,
      ],
      providers: [
        EventRemoteDataSourceService,
        EventRepositoryService,
        GetEventByIdService,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
