import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef, PageEvent } from '@angular/material';

import 'rxjs/add/operator/map';

import { ApiService } from '../shared/api/api.service';
import { LoadingService } from '../shared/loading/loading.service';
import { ErrorService } from '../shared/error/error.service';


import { Animations } from '../app.animations';

import { SearchDialogComponent } from './search-dialog/search-dialog.component';
import { DEFAULT_QUERY_LIMIT } from '../app.config';
import { IVolumeList } from '../shared/api/ivolume-list';

class QueryParams {
  title?: string;
  author?: string;
  publisher?: string;
  take?: number;
  offset?: number;
  constructor() {
    this.title = '';
    this.author = '';
    this.publisher = '';
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
  dialogRef: MatDialogRef<SearchDialogComponent>;
  animations: any;
  result: IVolumeList

  constructor(private api: ApiService, private loading: LoadingService, private error: ErrorService, public searchDialog: MatDialog,
    private activatedRoute: ActivatedRoute, private router: Router) {
    this.init();
    // read query params from url
  }

  private init(): void {
    this.result = null;
    this.animations = {
      fab: ''
    };
  }

  ngOnInit() {
    this.activatedRoute.queryParams
      .subscribe(params => {
        if (params.title || params.author || params.publisher) {
          console.log(params);
          this.getBooks(params);
        } else {
          this.init();
        }
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
      title: this.activatedRoute.snapshot.queryParams.title,
      author: this.activatedRoute.snapshot.queryParams.author,
      publisher: this.activatedRoute.snapshot.queryParams.publisher,
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
    this.api.volumeList(params.title, params.author, params.publisher, params.offset, params.take).subscribe(
      result => {
        this.result = result;
        this.animations.fab = (this.result.totalItems) ? 'active' : '';
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
          // show no result placeholder
        });
      }
    );
  }
}
