import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';

import { Loan } from './loan';
import { MockLoans } from './mock-loans';

@Injectable()
export class LoansService {

  constructor() { }

  list(): Observable<Loan[]> {
    return Observable.from(new Array(MockLoans));
  }

  add(): void {
    
  }
}
