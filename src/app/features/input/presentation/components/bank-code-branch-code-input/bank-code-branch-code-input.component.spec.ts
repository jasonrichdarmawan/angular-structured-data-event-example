import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankCodeBranchCodeInputComponent } from './bank-code-branch-code-input.component';

describe('BankCodeBranchCodeInputComponent', () => {
  let component: BankCodeBranchCodeInputComponent;
  let fixture: ComponentFixture<BankCodeBranchCodeInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankCodeBranchCodeInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankCodeBranchCodeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
