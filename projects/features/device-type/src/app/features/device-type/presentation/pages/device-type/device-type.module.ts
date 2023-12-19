import { NgModule, Optional, PLATFORM_ID } from '@angular/core';
import { CommonModule, DOCUMENT, isPlatformServer } from '@angular/common';

import { DeviceTypeRoutingModule } from './device-type-routing.module';
import { DeviceTypePage } from './device-type.page';
import { DesktopModule } from '../../components/desktop/desktop.module';
import { MobileModule } from '../../components/mobile/mobile.module';
import { TabletModule } from '../../components/tablet/tablet.module';
import { CLIENT_WIDTH, GetDeviceTypeService, IS_SERVER, USER_AGENT } from '../../../domain/usecases/get-device-type/get-device-type.service';
import { REQUEST } from '@nguniversal/express-engine/tokens';
import { Request } from 'express';


@NgModule({
  declarations: [
    DeviceTypePage
  ],
  imports: [
    CommonModule,
    DeviceTypeRoutingModule,
    DesktopModule,
    MobileModule,
    TabletModule
  ],
  providers: [
    { 
      provide: IS_SERVER, 
      deps: [PLATFORM_ID],
      useFactory: (platformID: Object) => {
        return isPlatformServer(platformID)
      }
    },
    {
      provide: USER_AGENT,
      // https://angular.io/api/core/FactoryProvider#example
      deps: [IS_SERVER, [new Optional(), REQUEST]],
      useFactory: (isServer: boolean, request?: Request) => {
        return isServer ? (<any>request?.headers)['user-agent'] : document.defaultView?.navigator.userAgent!;
      }
    },
    {
      provide: CLIENT_WIDTH,
      deps: [[new Optional(), DOCUMENT]],
      useFactory: (document?: Document) => {
        return document?.documentElement.clientWidth;
      }
    },
    GetDeviceTypeService,
  ]
})
export class DeviceTypeModule { }
