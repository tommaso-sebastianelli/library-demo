import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanDialogComponent } from './loan-dialog.component';

import { MaterialModule, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

import { HttpThrottlerService } from '../../shared/http-throttler/http-throttler.service';
import { LoansService } from '../../loans/loans.service';


class MdDialogRefMock {
}

describe('LoanDialogComponent', () => {
  let component: LoanDialogComponent;
  let fixture: ComponentFixture<LoanDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        MaterialModule
      ],
      declarations: [ LoanDialogComponent ],
      providers: [
        { provide: MdDialogRef, useClass: MdDialogRefMock },
        LoansService,
        HttpThrottlerService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
