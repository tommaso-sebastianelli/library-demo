import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';

@Injectable()
export class HttpMockService {
  constructor() { }

  throttle(request: Observable<any>) {
    return request.delay(this.getRandomDelay());
  }

  private getRandomDelay(): number {
    return Math.floor(Math.random() * 5);
  }
}
