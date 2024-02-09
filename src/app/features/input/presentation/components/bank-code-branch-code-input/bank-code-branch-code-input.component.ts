import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bank-code-branch-code-input',
  templateUrl: './bank-code-branch-code-input.component.html',
  styleUrls: ['./bank-code-branch-code-input.component.scss']
})
export class BankCodeBranchCodeInputComponent implements OnInit {
  bankCode: string;
  branchCode: string;

  constructor() {
    this.bankCode = "";
    this.branchCode = "";
  }

  ngOnInit(): void {
  }

}
