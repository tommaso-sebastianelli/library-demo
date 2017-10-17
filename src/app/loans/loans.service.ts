import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/concatMap';

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
    const loans: Loan[] = new Array().concat(new Array(MockLoans), this.getLocalLoans());
    return this.http_throttler.throttle(Observable.from(loans));
  }

  get(id: string): Observable<Loan> {
    return this.list().concatMap(loans => loans.filter(loan => loan.id === id)).first();
  }

  request(loan: Loan): Observable<Loan> {
    const savedLoan: Loan = this.fakeSave(loan);
    return this.http_throttler.throttle(Observable.of(savedLoan));
  }

  private getLocalLoans(): Loan[] {
    const _session = JSON.parse(sessionStorage.getItem(this.app_local_storage_name));
    return _session.guest.loans.map(o => {
      return new Loan(o.id, o.from, o.to, o.book, o.status);
    });
  }

  private setLocalLoans(loans: Loan[]): void {
    sessionStorage.setItem(this.app_local_storage_name, JSON.stringify({ guest: { loans: loans } }));
  }

  private fakeSave(_loan: Loan): Loan {//this needs to be replaced with a real API call someday
    _loan.id = Math.random().toString().substring(2);
    _loan.status = LoanStatus.Opened;
    const _local_loans = this.getLocalLoans();
    _local_loans.push(_loan);
    this.setLocalLoans(_local_loans);
    return _loan;
  }
}
