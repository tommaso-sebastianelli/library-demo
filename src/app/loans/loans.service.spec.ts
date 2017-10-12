import { TestBed, inject } from '@angular/core/testing';

import { LoansService } from './loans.service';
import { HttpThrottlerService } from '../shared/http-throttler/http-throttler.service';


describe('LoansService', () => {
  beforeEach(() => {
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
  
  it('should return a Loan Promise', inject([LoansService], (service: LoansService) => {
    expect (service.get('00000000000000001').subscribe()).toBeTruthy();
  }));
});
