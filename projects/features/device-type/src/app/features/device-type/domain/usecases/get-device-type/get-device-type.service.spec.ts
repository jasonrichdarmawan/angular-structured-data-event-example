import { TestBed } from '@angular/core/testing';

import { GetDeviceTypeService } from './get-device-type.service';

describe('GetDeviceTypeService', () => {
  let service: GetDeviceTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetDeviceTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
