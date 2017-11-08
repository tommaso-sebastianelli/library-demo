import { TestBed, inject } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import * as moment from 'moment';

import { HttpMockService } from './http-mock.service';

describe('HttpMockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpMockService]
    });
    // jasmine.clock().install();
  });

  it('should be created', inject([HttpMockService], (service: HttpMockService) => {
    expect(service).toBeTruthy();
  }));

  // it('should return an Observable delayed between 0 and 5 secs', inject([HttpMockService], (service: HttpMockService) => {
  //   const startTime = moment();
  //   let endTime = null;
  //   const obs = Observable.from('hello');
  //   service.throttle(obs).subscribe(n => { }, e => { }, () => {
  //     endTime = moment();
  //   });
  //   jasmine.clock().tick(5000);
  //   expect(moment(endTime).diff(startTime)).toBeGreaterThanOrEqual(0);
  //   expect(moment(endTime).diff(startTime)).toBeLessThanOrEqual(5);
  // }));

  afterEach(() => {
    // jasmine.clock().uninstall();
  });
});
