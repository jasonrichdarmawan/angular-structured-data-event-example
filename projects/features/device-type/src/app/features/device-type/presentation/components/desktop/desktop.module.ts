import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesktopComponent } from './desktop.component';



@NgModule({
  declarations: [
    DesktopComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DesktopComponent
  ]
})
export class DesktopModule { }
