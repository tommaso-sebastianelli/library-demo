import { Component, OnInit } from '@angular/core';
import { MatDialog, MatPseudoCheckbox, MatCard } from '@angular/material';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


import { SearchService } from '../search/search.service';
import { Book } from '../shared/bookshelf/book/book';
import { SearchDialogComponent } from './search-dialog/search-dialog.component';


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

  constructor(private searchService: SearchService, public searchDialog: MatDialog) {
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

  openDialog(): void {
    let dialogRef = this.searchDialog.open(SearchDialogComponent, {
      data: { }
    });

    dialogRef.afterClosed().subscribe(result => {
      
    });
  }
}
