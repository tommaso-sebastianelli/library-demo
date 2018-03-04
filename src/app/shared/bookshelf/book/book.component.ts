import { Component, Input, OnInit } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { Book } from './book';

import { Animations } from '../../../app.animations';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  animations: Animations
})
export class BookComponent implements OnInit {
  @Input() book: Book;
  animations: any;
  constructor() {
    this.animations = {}
  }

  ngOnInit() {

  }

}
