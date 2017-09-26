import { Component, Inject, OnInit } from '@angular/core';
import {MdDialogRef, MD_DIALOG_DATA} from '@angular/material';

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

  loanBook(book:Book, weeks: number){
    this.loading = true;
    return this.loansService.request(book, weeks*7).subscribe(
      x => { },
      e => { },
      () => {
        this.loading = false;
        this.dialogRef.close();
        //show snackbar message: request successful
      });
  }
}
