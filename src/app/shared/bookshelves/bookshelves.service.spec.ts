import { TestBed, inject } from '@angular/core/testing';

import { BookshelvesService } from './bookshelves.service';

describe('BookshelvesService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [BookshelvesService]
		});
	});

	it('should be created', inject([BookshelvesService], (service: BookshelvesService) => {
		expect(service).toBeTruthy();
	}));
});
