import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';

import { Book } from '../shared/book/book';
import { Loan } from './loan';
import { LoanStatus } from './loan-status.enum';

import { MockLoans } from './mock-loans';

import { HttpThrottlerService } from '../shared/http-throttler/http-throttler.service';

@Injectable()
export class LoansService {
  private readonly app_local_storage_name = 'library-demo';

  constructor(public http_throttler: HttpThrottlerService) {
    sessionStorage.setItem('library-demo', JSON.stringify({ guest: { loans: [] } }));
  }

  list(): Observable<Loan[]> {
    const mock = new Array(MockLoans);
    const localStorage = this.getLocalLoans();
    return this.http_throttler.throttle(Observable.from(mock.concat(localStorage)));
  }

  request(loan: Loan): Observable<Loan> {
    return Observable.create(function (observer) {
      setTimeout(() => {
        observer.next(this.fakeSave(loan));
        observer.complete();
      }
        , 2000);
    });
  }

  getLocalLoans(): Loan[] {
    const _local = JSON.parse(localStorage.getItem(this.app_local_storage_name));
    return _local.guest.loans.map(o => {
      return new Loan(o.id,o.from, o.to, o.book, o.status);
    });
  }

  setLocalLoans(loans: Loan[]): void{
    localStorage.setItem(this.app_local_storage_name, JSON.stringify({guest:loans}));
  }

  fakeSave(_loan: Loan): Loan {//this needs to be replaced with a real API call someday
    _loan.id = Math.random().toString().substring(2);
    _loan.status = LoanStatus.Opened;
    this.setLocalLoans(this.getLocalLoans().push(_loan));
    return _loan;
  }
}
