import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { LoanDialogComponent } from './loan-dialog/loan-dialog.component';

import { SearchService } from '../search/search.service';
import { LoansService } from '../loans/loans.service';
import { Book } from '../shared/book/book';
import { Loan } from '../loans/loan';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  title: string;
  books: Observable<Book[]>;
  activeView: number;
  loading: boolean;

  constructor(private searchService: SearchService, private loansService: LoansService, public loanDialog: MatDialog) {
  }

  ngOnInit() {
    this.switchSearch();
    this.loading = false;
  }

  onEnter(keyword: string) {
    this.loading = true;
    this.books = this.searchService.list(keyword);
    this.books
      .subscribe(
      x => { },
      e => { },
      () => {
        this.loading = false;
        this.switchResults();
      }
      );
  }

  switchResults(): void {
    this.activeView = 1;
  }

  switchSearch(): void {
    this.activeView = 0;
  }

  openLoanDialog(_book: Book): void {
    this.loanDialog.open(LoanDialogComponent, {
      width: '500px',
      data: { book: _book }
    });
  }

  canLoan(_book_id: string): boolean {
    return this.loansService.session().filter(l => l.book.id === _book_id).length == 0;
  }

}
