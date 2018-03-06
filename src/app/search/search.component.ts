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

const DEFAULT_QUERY_LIMIT = 25;

class QueryParams {
  title?: string;
  author?: string;
  publisher?: string;
  take?: number;
  offset?: number;
  constructor() {
    this.title = "";
    this.author = "";
    this.publisher = "";
    this.take = DEFAULT_QUERY_LIMIT;
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
  animations: any;

  constructor(private api: ApiService, private loading: LoadingService, private error: ErrorService, public searchDialog: MatDialog,
    private activatedRoute: ActivatedRoute, private router: Router) {
    this.init();
    //read query params from url
  }

  private init(): void {
    this.books = [];
    this.animations = {
      fab: ''
    };
  }

  ngOnInit() {
    this.activatedRoute.queryParams
      .subscribe(params => {
        console.log(params);
        this.getBooks(params);
      });
  }

  openDialog(): void {
    this.dialogRef = this.searchDialog.open(SearchDialogComponent, {
      data: {
        onSearch: (title: string, author: string, publisher: string) => {
          this.dialogRef.close();
          this.updateQueryParams({
            title: title,
            author: author,
            publisher: publisher,
            take: DEFAULT_QUERY_LIMIT,
            offset: 0
          });
        }
      }
    });
  }

  onPagerChange(pagerStatus: PageEvent): void {
    this.updateQueryParams({
      title: this.activatedRoute.snapshot.queryParams["title"],
      author: this.activatedRoute.snapshot.queryParams["author"],
      publisher: this.activatedRoute.snapshot.queryParams["publisher"],
      take: pagerStatus.pageSize,
      offset: pagerStatus.pageIndex * pagerStatus.pageSize
    });
  }

  private updateQueryParams(params: QueryParams): void {
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: params
    });
  }

  private getBooks = (params: QueryParams) => {
    this.loading.wait();
    this.api.list(params.title, params.author, params.publisher, params.offset, params.take).subscribe(
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
