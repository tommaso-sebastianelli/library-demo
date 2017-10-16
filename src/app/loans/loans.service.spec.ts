import { TestBed, inject } from '@angular/core/testing';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';

import { Loan } from './loan';
import { Book } from '../shared/book/book';
import { MockLoans } from './mock-loans';
import { LoansService } from './loans.service';
import { HttpThrottlerService } from '../shared/http-throttler/http-throttler.service';


describe('LoansService', () => {

  beforeEach(() => {
    let total_loans: number;
    TestBed.configureTestingModule({
      providers: [
        LoansService,
        HttpThrottlerService
      ]
    });
  });

  it('should be created', inject([LoansService], (service: LoansService) => {
    expect(service).toBeTruthy();
  }));

  it('should return an Observable of Loans', inject([LoansService], (service: LoansService) => {
    expect(service.list()).toEqual(jasmine.any(Observable));
  }));

  it('should return an array of Loans', inject([LoansService], (service: LoansService) => {
    service.list().subscribe(result => {
      this.total_loans = result.length;
      expect(result).toEqual(jasmine.any(Array));
    });
    service.list().concatMap(loans => loans).take(1).subscribe(result => expect(result).toEqual(jasmine.any(Loan)));
  }));

  it('should return an Observable of a specific Loan', inject([LoansService], (service: LoansService) => {
    expect(service.get('00000000000000001')).toEqual(jasmine.any(Observable));
  }));

  it('should return a specific Loan', inject([LoansService], (service: LoansService) => {
    service.get('00000000000000001').subscribe(result => { expect(result.book.title).toMatch('JavaScript For Dummies') });
  }));

  // it('should save and return a Loan', inject([LoansService], (service: LoansService) => {
  //   service.request(new Loan(null, '2017-10-09T22:10:00', '2017-10-19T22:10:00', new Book({ id: 'aE672fk', title: 'dummy_book' }))).subscribe(result => {
  //     expect(result).toEqual(jasmine.any(Loan));
  //     service.list().subscribe(result => { expect(result.length).toBeGreaterThan(this.total_loans) });
  //   });
  // }));

  // afterEach(done => {
  //   done();
  // });
});
