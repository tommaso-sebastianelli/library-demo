import { Component, Inject, OnInit } from '@angular/core';
import {MdDialogRef, MD_DIALOG_DATA} from '@angular/material';
import * as moment from 'moment';

import { Observable } from 'rxjs/Observable';

import {Book} from '../../shared/book/book';
import {Loan} from '../../loans/loan';
import {LoansService} from '../../loans/loans.service';

@Component({
  selector: 'app-loan-dialog',
  templateUrl: './loan-dialog.component.html',
  styleUrls: ['./loan-dialog.component.scss'],
})
export class LoanDialogComponent implements OnInit {
public loading: boolean;
  constructor(public dialogRef: MdDialogRef<LoanDialogComponent>,
    @Inject(MD_DIALOG_DATA) public data: any,
  public loansService:LoansService) { }

  ngOnInit() {
  }

  loanBook(book: Book, weeks: number) {
    this.loading = true;
    return this.loansService.request(this.getModel(book, weeks)).subscribe(
      n => {
        console.log(n)},
      e => {},
      () => {
        this.dialogRef.close();
        //show snackbar message: request successful
      });
  }

  getModel(book:Book, weeks:number):Loan{
    return new Loan(null, moment().startOf('d').toISOString(), moment().add((weeks*7)+1, 'd').startOf('d').toISOString(), book);
  }
}
