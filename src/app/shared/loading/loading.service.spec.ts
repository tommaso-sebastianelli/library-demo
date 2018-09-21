import { TestBed, inject } from '@angular/core/testing';

import { MatDialogModule, MatDialog } from '@angular/material';
import { LoadingService } from './loading.service';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

describe('LoadingService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule(
			{
				imports: [MatDialogModule],
				providers: [
					LoadingService,
					{
						provide: MatDialog,
						useValue: {
							open: () => {
								return {
									afterOpen: () => of({}),
									afterClose: () => of({}),
									close: () => { }
								}
							}
						}
					}
				]
			}
		);
	});

	it('should be created', inject([LoadingService], (service: LoadingService) => {
		expect(service).toBeTruthy();
	}));

	it('should return a Observable after opening', inject([LoadingService], (service: LoadingService) => {
		expect(service.wait()).toEqual(jasmine.any(Observable));
	}));
});
