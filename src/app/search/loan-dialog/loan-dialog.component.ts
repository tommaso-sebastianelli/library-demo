import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import {MdDialogRef, MD_DIALOG_DATA} from '@angular/material';
import {MdSnackBar} from '@angular/material';
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
public loanRequest: any;
private readonly requestTimeout:number = 4000;
@ViewChild('snackmessage') snackbar_message;
@ViewChild('snackaction') snackbar_action;
  constructor(public dialogRef: MdDialogRef<LoanDialogComponent>,
              @Inject(MD_DIALOG_DATA) public data: any,
              public loansService:LoansService,
              public snackBar:MdSnackBar
) { }

  ngOnInit() {
  }

  loan(book: Book, weeks: number) {
    // this.loading = true;
    this.openSnackBar();

    let model = new Loan(
      null,
      moment().startOf('d').toISOString(), 
      moment().add((weeks*7)+1, 'd').startOf('d').toISOString(), 
      book,
      null);

    this.loanRequest = this.loansService.request(model)
    .delay(this.requestTimeout)
    .subscribe(
      n => {
        console.log(n)},
      e => {},
      () => {
        this.dialogRef.close();
      });
  }

  undo():void{
      this.loanRequest.dispose();
  }

  openSnackBar(): void{
    this.snackBar.open(this.snackbar_message.nativeElement.innerText, this.snackbar_action.nativeElement.innerText, {duration: this.requestTimeout});
  }
}
