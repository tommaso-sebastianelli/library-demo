import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/switchMap';

import { Book } from '../shared/book/book';
import { Loan } from './loan';
import { LoanStatus } from './loan-status.enum';

import { MockLoans } from './mock-loans';

import { HttpThrottlerService } from '../shared/http-throttler/http-throttler.service';

@Injectable()
export class LoansService {
  private readonly app_local_storage_name = 'library-demo';

  constructor(public http_throttler: HttpThrottlerService) {
    sessionStorage.setItem(this.app_local_storage_name, JSON.stringify({ guest: { loans: MockLoans } }));
  }

  list(): Observable<any> {
    return this.http_throttler.throttle(Observable.from(this._getLoans()).concatMap(l => {
      return Observable.of(l);
    }));
  }

  get(id: string): Observable<Loan> {
    return this.list().filter(loan => loan.id === id);
  }

  request(loan: Loan): Observable<Loan> {
    return this.http_throttler.throttle(Observable.of(this._addLoan(loan)));
  }

  session(): Loan[] {
    return this._getLoans();
  }
  //these methods fake a server side logic of retrieving loan data and will be replaced  with a real API call someday

  private _addLoan(_loan: Loan): Loan {
    _loan.id = Math.random().toString().substring(2);
    _loan.status = LoanStatus.Pending;
    let _loans = this._getLoans();
    _loans.push(_loan);
    this._setLoans(_loans);
    return _loan;
  }

  private _getLoans(): Loan[] {
    return JSON.parse(sessionStorage.getItem(this.app_local_storage_name)).guest.loans
      .map(o => {
        return new Loan(o.id, o.from, o.to, o.book, o.status);
      });
  }

  private _setLoans(loans: Loan[]): void {
    sessionStorage.setItem(this.app_local_storage_name, JSON.stringify({ guest: { loans: loans } }));
  }
}
