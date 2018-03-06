import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatPseudoCheckbox, MatCard, MatDialogRef, PageEvent } from '@angular/material';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { ApiService } from '../shared/api.service';
import { LoadingService } from '../shared/loading/loading.service';
import { ErrorService } from '../shared/error/error.service';


import { Animations } from '../app.animations';

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
  styleUrls: ['./search.component.scss'],
  animations: Animations
})
export class SearchComponent implements OnInit {
  books: Book[];
  dialogRef: MatDialogRef<SearchDialogComponent>;
  searchParams: SearchParams;
  animations: any;

  constructor(private api: ApiService, private loading: LoadingService, private error: ErrorService, public searchDialog: MatDialog,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
    this.init();
  }

  private init(): void {
    this.searchParams = new SearchParams();
    this.books = [];
    this.animations = {
      fab: ''
    };
  }

  ngOnInit() {
    // setTimeout(() => {
    //   this.getBooks(new PageEvent());
    // }, 500);

    // this.animations.fab = 'active';
    // setTimeout(() => {
    //   this.animations.fab = '';
    // }, 1000);
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: {
        ...this.activatedRoute.snapshot.queryParams,
        myParam: 'myNewValue',
      }
    });
  }

  openDialog(): void {
    this.dialogRef = this.searchDialog.open(SearchDialogComponent, {
      data: {
        onSearch: (title: string, author: string, publisher: string) => {
          this.searchParams = new SearchParams();
          this.searchParams.title = title;
          this.searchParams.author = author;
          this.searchParams.publisher = publisher;
          this.dialogRef.close();
          this.getBooks(new PageEvent());
        }
      }
    });
  }

  private getBooks = (pagerStatus: PageEvent) => {
    this.loading.wait();
    this.api.list(
      this.searchParams.title,
      this.searchParams.author,
      this.searchParams.publisher,
      pagerStatus.pageIndex * pagerStatus.pageSize,
      pagerStatus.pageSize
    ).subscribe(
      result => {
        this.books = result;
      },
      e => {
        this.loading.done().subscribe(() => {
          this.error.throw(e).subscribe(() => {
            this.init();
          });
        });
      },
      () => {
        this.loading.done().subscribe(() => {
          this.animations.fab = (this.books.length) ? 'active' : '';
          //show no result placeholder
        });
      }
    );
  }
}
