import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubdomainPage } from './subdomain.page';

describe('SubdomainPage', () => {
  let component: SubdomainPage;
  let fixture: ComponentFixture<SubdomainPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubdomainPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubdomainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
