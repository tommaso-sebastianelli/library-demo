import { TestBed, inject } from '@angular/core/testing';

import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ErrorService } from './error.service';

describe('ErrorService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				MatDialogModule
			],
			providers: [ErrorService]
		});
	});

	it('should be created', inject([ErrorService], (service: ErrorService) => {
		expect(service).toBeTruthy();
	}));
});
