import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubdomainRoutingModule } from './subdomain-routing.module';
import { SubdomainPage } from './subdomain.page';
import { SubdomainChildModule } from '../../components/subdomain-child/subdomain-child.module';


@NgModule({
  declarations: [
    SubdomainPage
  ],
  imports: [
    CommonModule,
    SubdomainRoutingModule,
    SubdomainChildModule,
  ]
})
export class SubdomainModule { }
