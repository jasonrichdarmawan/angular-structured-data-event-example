import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubdomainRoutingModule } from './subdomain-routing.module';
import { SubdomainPage } from './subdomain.page';


@NgModule({
  declarations: [
    SubdomainPage
  ],
  imports: [
    CommonModule,
    SubdomainRoutingModule
  ]
})
export class SubdomainModule { }
