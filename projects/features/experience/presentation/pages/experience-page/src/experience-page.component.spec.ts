import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperiencePageComponent } from './experience-page.component';
import { ExperienceRemoteDataSourceService } from '@features/experience/data/datasources/experience-remote-data-source';
import { ExperienceRepositoryService } from '@features/experience/data/repositories/experience-repository';
import { RouterTestingModule } from '@angular/router/testing';
import { GetExperienceByIdService } from '@features/experience/domain/usecases/get-experience-by-id';

describe('ExperiencePageComponent', () => {
  let component: ExperiencePageComponent;
  let fixture: ComponentFixture<ExperiencePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperiencePageComponent ],
      imports: [
        RouterTestingModule,
      ],
      providers: [
        ExperienceRemoteDataSourceService,
        ExperienceRepositoryService,
        GetExperienceByIdService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperiencePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
