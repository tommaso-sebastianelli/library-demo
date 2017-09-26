import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/delay';

import { Book } from '../book';
import { Loan } from './loan';
import { MockLoans } from './mock-loans';

@Injectable()
export class LoansService {
private readonly throttle = 1500;
  constructor() {    
    sessionStorage.setItem('library-demo', JSON.stringify({guest: {loans: []}}));
  }

  list(): Observable<Loan[]> {
    const mock = new Array(MockLoans);
    const localStorage = this.getLocalLoans();
    return Observable.from(mock.concat(localStorage)).delay(this.throttle);
  }

  add(book: Book): Observable<Loan> {
    return ;
  }

  getLocalLoans(): Loan[] {
    const _local = JSON.parse(localStorage.getItem('library-demo'));
    return _local.guest.loans;
  }
}
