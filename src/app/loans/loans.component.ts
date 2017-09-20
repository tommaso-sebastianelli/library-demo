import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';

import { Loan } from './loan';
import { LoansService } from './loans.service';


@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.scss']
})
export class LoansComponent implements OnInit {
  loans: Loan[];
  constructor(private loansService: LoansService) { }

  ngOnInit() {

  }
}
