import { TestBed, inject } from '@angular/core/testing';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/toArray';

import { Loan } from './loan';
import { Book } from '../shared/book/book';
import { MockLoans } from './mock-loans';
import { LoansService } from './loans.service';
import { HttpMockService } from '../shared/http-mock/http-mock.service';


describe('LoansService', () => {
  let spy = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LoansService,
        HttpMockService
      ]
    });

    spy = {
      noop: function () {
        return;
      }
    }
    spyOn(spy, 'noop');
  });

  it('should be created', inject([LoansService], (service: LoansService) => {
    expect(service).toBeTruthy();
  }));

  it('should return an Observable', inject([LoansService], (service: LoansService) => {
    expect(service.list()).toEqual(jasmine.any(Observable));
  }));

  it('should return a Loan', inject([LoansService], (service: LoansService) => {
    service.list().subscribe(result => {
      spy.noop();
      expect(result).toEqual(jasmine.any(Loan));
    },
      e => { },
      () => {
        expect(spy.noop.calls.any()).toEqual(true);
      });
  }));

  it('should return an array of Loans', inject([LoansService], (service: LoansService) => {
    service.list().toArray().subscribe(result => {
      expect(result).toEqual(jasmine.any(Array));
    });
  }));

  it('should return an Observable of a specific Loan', inject([LoansService], (service: LoansService) => {
    expect(service.get('00000000000000001')).toEqual(jasmine.any(Observable));
  }));

  it('should return a specific Loan', inject([LoansService], (service: LoansService) => {
    service.get('00000000000000001').subscribe(result => { expect(result.book.title).toMatch('JavaScript For Dummies'); });
  }));

  it('should return nothing', inject([LoansService], (service: LoansService) => {
    service.get('00000000000000000').subscribe(result => { },
      e => { expect(e).toBeTruthy(); },
      () => { }
    );
  }));

  it('should save and return a Loan', inject([LoansService], (service: LoansService) => {
    service.request(new Loan(null, '2017-10-09T22:10:00', '2017-10-19T22:10:00', new Book({ id: 'aE672fk', title: 'dummy_book' }))).subscribe(result => {
      expect(result).toEqual(jasmine.any(Loan));
    });
  }));

  beforeEach(() => {

  });
});
