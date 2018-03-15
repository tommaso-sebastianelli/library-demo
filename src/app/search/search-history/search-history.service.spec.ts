import { TestBed, inject } from '@angular/core/testing';

import { SearchHistoryService } from './search-history.service';

describe('SearchHistoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchHistoryService]
    });
  });

  it('should be created', inject([SearchHistoryService], (service: SearchHistoryService) => {
    expect(service).toBeTruthy();
  }));
});
