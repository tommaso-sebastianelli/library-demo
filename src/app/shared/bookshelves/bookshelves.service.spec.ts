import { TestBed, inject } from '@angular/core/testing';

import { BookshelvesService } from './bookshelves.service';
import { BookshelvesServiceStub } from './bookshelves.stub';

describe('BookshelvesService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				BookshelvesService,
				{
					provide: BookshelvesService,
					useValue: BookshelvesServiceStub
				}
			]
		});
	});

	it('should be created', inject([BookshelvesService], (service: BookshelvesService) => {
		expect(service).toBeTruthy();
	}));
});
