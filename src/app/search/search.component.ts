import { Component, OnInit } from '@angular/core';
import { MatDialog, MatPseudoCheckbox, MatCard, MatDialogRef, PageEvent } from '@angular/material';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { ApiService } from '../shared/api.service';


import { Book } from '../shared/bookshelf/book/book';
import { SearchDialogComponent } from './search-dialog/search-dialog.component';
import { isNullOrUndefined } from 'util';

class SearchParams {
  title: string;
  author: string;
  publisher: string;
  take: number;
  offset: number;
  constructor() {
    this.title = "";
    this.author = "";
    this.publisher = "";
    this.take = 25;//global constant
    this.offset = 0;
  }
}

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
  dialogRef: MatDialogRef<SearchDialogComponent>;
  searchParams: SearchParams;

  constructor(private api: ApiService, public searchDialog: MatDialog) {
    this.searchParams = new SearchParams();
  }

  ngOnInit() {
    this.books = Observable.of(null);
    // this.loading = false;
  }

  openDialog(): void {
    this.dialogRef = this.searchDialog.open(SearchDialogComponent, {
      data: {
        onSearch: (title: string, author: string, publisher: string) => {
          this.searchParams = new SearchParams();
          this.searchParams.title = title;
          this.searchParams.author = author;
          this.searchParams.publisher = publisher;
          this.getBooks(new PageEvent());
        }
      }
    });
  }

  private getBooks = (pagerStatus: PageEvent) => {
    // this.loading = true;
    this.books = this.api.list(this.searchParams.title, this.searchParams.author, this.searchParams.publisher, pagerStatus.pageIndex * pagerStatus.pageSize, pagerStatus.pageSize);
    this.books
      .subscribe(
        x => { },
        e => { },
        () => {
          // this.loading = false;
        }
      );
  }
}
