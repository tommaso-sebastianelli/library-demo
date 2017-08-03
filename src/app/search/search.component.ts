import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  title: string;
  constructor(private route: ActivatedRoute) { 
  }

  ngOnInit() {
    this.title = this.route.snapshot.data.title;
  }

}
