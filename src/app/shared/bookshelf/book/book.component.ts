import { Component, Input, OnInit } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';

import { Animations } from '../../../app.animations';
import { IVolume } from '../../api/ivolume';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  animations: Animations
})
export class BookComponent implements OnInit {
  @Input() data: IVolume;
  animations: any;
  constructor() {
    this.animations = {};
  }

  ngOnInit() {

  }

}
