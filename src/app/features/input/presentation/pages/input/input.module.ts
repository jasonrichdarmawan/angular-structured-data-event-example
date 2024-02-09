import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputRoutingModule } from './input-routing.module';
import { InputPage } from './input.page';
import { BankCodeBranchCodeInputModule } from '../../components/bank-code-branch-code-input/bank-code-branch-code-input.module';


@NgModule({
  declarations: [
    InputPage,
  ],
  imports: [
    CommonModule,
    InputRoutingModule,
    BankCodeBranchCodeInputModule,
  ]
})
export class InputModule { }
