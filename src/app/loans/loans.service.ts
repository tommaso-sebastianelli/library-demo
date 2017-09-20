import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';

import { Loan } from './loan';
import { MockLoans } from './mock-loans';

@Injectable()
export class LoansService {

  constructor() { }

  list(): Observable<Loan[]> {
    let mock = new Array(MockLoans);
    let localStorage = new Array();
    return Observable.from(mock.concat(localStorage));
  }

  add(): void {
        
  }
}
