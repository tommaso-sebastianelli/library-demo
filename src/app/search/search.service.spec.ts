import { TestBed, inject } from '@angular/core/testing';

import { SearchService } from './search.service';
import { HttpModule } from '@angular/http';

import { Book } from '../shared/book/book';

describe('SearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [SearchService]
    });
  });

  it('should be created', inject([SearchService], (service: SearchService) => {
    expect(service).toBeTruthy();
  }));

  it('should return a list of books', inject([SearchService], (service: SearchService) => {
    service.list('aaa').subscribe(result => {
      expect(result).toEqual(jasmine.any(Array));
    });
  }));

  it('should return one book', inject([SearchService], (service: SearchService) => {
    service.get('DiK_UShlVCEC').subscribe(result => { expect(result).toEqual(jasmine.any(Book)); });
  }));

  it('should return no results', inject([SearchService], (service: SearchService) => {
    service.get('not_an_id').subscribe(result => {
      expect(result).toBeFalsy();
    });
  }));
});
