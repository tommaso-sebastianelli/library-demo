import { TestBed, inject } from '@angular/core/testing';

import { HttpThrottlerService } from './http-throttler.service';

describe('HttpThrottleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpThrottlerService]
    });
  });

  it('should be created', inject([HttpThrottlerService], (service: HttpThrottlerService) => {
    expect(service).toBeTruthy();
  }));
});
