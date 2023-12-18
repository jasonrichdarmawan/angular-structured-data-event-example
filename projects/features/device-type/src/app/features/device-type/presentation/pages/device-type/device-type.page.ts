import { DOCUMENT, isPlatformServer } from '@angular/common';
import { Component, Inject, OnInit, Optional, PLATFORM_ID } from '@angular/core';
import { REQUEST } from '@nguniversal/express-engine/tokens';
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
    @Inject(PLATFORM_ID) platformID: string,
    @Optional() @Inject(REQUEST) request: Request,
    @Inject(DOCUMENT) document: Document,
    getDeviceType: GetDeviceTypeService
  ) {
    let isServer = isPlatformServer(platformID);
    let userAgent = isServer ? (<any>request.headers)['user-agent'] : document.defaultView?.navigator.userAgent!;
    let clientWidth = document.documentElement.clientWidth;
    this.deviceType = getDeviceType.call(isServer, userAgent, clientWidth);

    this.count = 0;
  }

  ngOnInit(): void {
  }
}
