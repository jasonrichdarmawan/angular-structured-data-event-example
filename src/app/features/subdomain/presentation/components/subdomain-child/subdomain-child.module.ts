import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubdomainChildComponent } from './subdomain-child.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SubdomainChildComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    SubdomainChildComponent,
  ]
})
export class SubdomainChildModule { }
