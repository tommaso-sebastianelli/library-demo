import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, /*Mat_DIALOG_DATA*/ } from '@angular/material';
import { MatSnackBar, MatSnackBarRef } from '@angular/material';
import * as moment from 'moment';

import { Observable } from 'rxjs/Observable';

import { Book } from '../../shared/book/book';
import { Loan } from '../../loans/loan';
import { LoansService } from '../../loans/loans.service';

@Component({
  selector: 'app-loan-dialog',
  templateUrl: './loan-dialog.component.html',
  styleUrls: ['./loan-dialog.component.scss'],
})
export class LoanDialogComponent implements OnInit {
  public loading: boolean;
  public loanRequest: any;
  private timeout: any;
  private readonly requestTimeout: number = 4000;
  @ViewChild('snackmessage') snackbar_message;
  @ViewChild('snackaction') snackbar_action;
  constructor(public dialogRef: MatDialogRef<LoanDialogComponent>,
    // @Inject(Mat_DIALOG_DATA) public data: any,
    public loansService: LoansService,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit() {
  }

  loan(book: Book, weeks: number) {
    // this.loading = true;
    this.dialogRef.close();
    this.openSnackBar();
    this.timeout = setTimeout(() => {
      const model = new Loan(
        null,
        moment().startOf('d').toISOString(),
        moment().add((weeks * 7) + 1, 'd').startOf('d').toISOString(),
        book,
        null);

      this.loansService.request(model)
        .subscribe(
        n => {
          console.log(n);
        },
        e => { },
        () => { });
    }, this.requestTimeout);
  }

  undo(): void {
    clearTimeout(this.timeout);
  }

  openSnackBar(): void {
    this.snackBar.open(this.snackbar_message.nativeElement.innerText, this.snackbar_action.nativeElement.innerText, { duration: this.requestTimeout })
      .onAction()
      .subscribe(
      x => (this.undo())
      );
  }
}
