import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubdomainChildComponent } from './subdomain-child.component';

describe('SubdomainChildComponent', () => {
  let component: SubdomainChildComponent;
  let fixture: ComponentFixture<SubdomainChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubdomainChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubdomainChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
