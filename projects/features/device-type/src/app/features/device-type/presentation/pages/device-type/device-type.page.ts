import { Component, OnInit } from '@angular/core';
import { DeviceType, GetDeviceTypeService } from '../../../domain/usecases/get-device-type/get-device-type.service';

@Component({
  selector: 'app-device-type',
  templateUrl: './device-type.page.html',
  styleUrls: ['./device-type.page.scss']
})
export class DeviceTypePage implements OnInit {
  deviceType: DeviceType;

  count: number;

  constructor(
    getDeviceType: GetDeviceTypeService
  ) {
    this.deviceType = getDeviceType.call();

    this.count = 0;
  }

  ngOnInit(): void {
  }
}
