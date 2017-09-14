import { Injectable } from '@angular/core';

import { Loan } from './loan';
import { MockLoans } from './mock-loans';

@Injectable()
export class LoansService {

  constructor() { }

  list(): Loan[] {
    return MockLoans;
  }
}
