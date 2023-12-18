import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeviceTypeRoutingModule } from './device-type-routing.module';
import { DeviceTypePage } from './device-type.page';
import { DesktopModule } from '../../components/desktop/desktop.module';
import { MobileModule } from '../../components/mobile/mobile.module';


@NgModule({
  declarations: [
    DeviceTypePage
  ],
  imports: [
    CommonModule,
    DeviceTypeRoutingModule,
    DesktopModule,
    MobileModule
  ]
})
export class DeviceTypeModule { }
