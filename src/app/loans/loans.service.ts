import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';

import { Book } from '../shared/book/book';
import { Loan } from './loan';
import { MockLoans } from './mock-loans';

import { HttpThrottlerService } from '../shared/http-throttler/http-throttler.service';

@Injectable()
export class LoansService {
  constructor(public http_throttler: HttpThrottlerService) {
    sessionStorage.setItem('library-demo', JSON.stringify({ guest: { loans: [] } }));
  }

  list(): Observable<Loan[]> {
    const mock = new Array(MockLoans);
    const localStorage = this.getLocalLoans();
    return this.http_throttler.throttle(Observable.from(mock.concat(localStorage)));
  }

  request(book: Book, days: number): Observable<Loan> {
    return Observable.create(function(observer){
      observer.next(new Loan(book, days));
      setTimeout(observer.complete(),2000);      
    });
  }

  getLocalLoans(): Loan[] {
    const _local = JSON.parse(localStorage.getItem('library-demo'));
    return _local.guest.loans;
  }
}
