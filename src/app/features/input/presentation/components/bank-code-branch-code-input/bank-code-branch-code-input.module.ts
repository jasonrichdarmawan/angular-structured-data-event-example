import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BankCodeBranchCodeInputComponent } from './bank-code-branch-code-input.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BankCodeBranchCodeInputComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    BankCodeBranchCodeInputComponent,
  ],
})
export class BankCodeBranchCodeInputModule { }
