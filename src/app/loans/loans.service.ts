import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';

import { Book } from '../book';
import { Loan } from './loan';
import { MockLoans } from './mock-loans';

@Injectable()
export class LoansService {

  constructor() {

  }

  list(): Observable<Loan[]> {
    const mock = new Array(MockLoans);
    const localStorage = this.getLocalLoans();
    return Observable.from(mock.concat(localStorage));
  }

  add(book: Book): void {

  }

  getLocalLoans(): Loan[] {
    const _local = JSON.parse(localStorage.getItem('library-demo'));
    return _local.guest.loans;
  }
}
