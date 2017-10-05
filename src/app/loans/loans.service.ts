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
    sessionStorage.setItem(this.app_local_storage_name, JSON.stringify({ guest: { loans: [] } }));
  }

  list(): Observable<Loan[]> {
    const mock = new Array(MockLoans);
    const _session = this.getLocalLoans();
    // return this.http_throttler.throttle(Observable.from(mock.concat(_session)));
    return this.http_throttler.throttle(Observable.create(function (observer) {
      mock.concat(_session).forEach(loan => {        
      observer.next(loan);
      });
      observer.complete();
    }));
  }

  get(id: string): Observable<Loan> {
    this.list().subscribe((l) => {
    });
  }

  request(loan: Loan): Observable<Loan> {
    let savedLoan = this.fakeSave(loan);
    return Observable.create(function (observer) {
      setTimeout(() => {
        observer.next(savedLoan);
        observer.complete();
      }
        , 2000);
    });
  }

  getLocalLoans(): Loan[] {
    let _session = JSON.parse(sessionStorage.getItem(this.app_local_storage_name));
    return _session.guest.loans.map(o => {
      return new Loan(o.id, o.from, o.to, o.book, o.status);
    });
  }

  setLocalLoans(loans: Loan[]): void {
    sessionStorage.setItem(this.app_local_storage_name, JSON.stringify({ guest: { loans: loans } }));
  }

  fakeSave(_loan: Loan): Loan {//this needs to be replaced with a real API call someday
    _loan.id = Math.random().toString().substring(2);
    _loan.status = LoanStatus.Opened;
    let _local_loans = this.getLocalLoans();
    _local_loans.push(_loan);
    this.setLocalLoans(_local_loans);
    return _loan;
  }
}
