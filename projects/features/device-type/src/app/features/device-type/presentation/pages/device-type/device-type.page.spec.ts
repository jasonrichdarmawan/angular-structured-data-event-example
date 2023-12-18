import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceTypePage } from './device-type.page';

describe('DeviceTypePage', () => {
  let component: DeviceTypePage;
  let fixture: ComponentFixture<DeviceTypePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceTypePage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceTypePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
