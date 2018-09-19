import { TestBed, inject } from '@angular/core/testing';

import { MatDialogModule } from '@angular/material';
import { LoadingService } from './loading.service';

describe('LoadingService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule(
			{
				imports: [MatDialogModule],
				providers: [LoadingService]
			}
		);
	});

	it('should be created', inject([LoadingService], (service: LoadingService) => {
		expect(service).toBeTruthy();
	}));
});
