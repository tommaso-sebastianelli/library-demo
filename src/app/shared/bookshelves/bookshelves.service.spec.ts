import { TestBed, inject } from '@angular/core/testing';

import { BookshelvesService } from './bookshelves.service';
import { BookshelvesServiceStub } from './bookshelves.stub';
import { ApiService } from '../api/api.service';
import { ApiServiceStub } from '../api/api.stub';
import { AuthService } from '../../../assets/libs/angularx-social-login-master';
import { TokenService } from '../auth/token.service';
import { TokenServiceStub } from '../auth/token.stub';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

describe('BookshelvesService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				BookshelvesService,
				{ provide: ApiService, useValue: ApiServiceStub },
				{
					provide: AuthService, useValue: {
						get authState(): Observable<any> {
							return of({});
						}
					}
				},
				{ provide: TokenService, useValue: TokenServiceStub },
			]
		});
	});

	it('should be created', inject([BookshelvesService], (service: BookshelvesService) => {
		expect(service).toBeTruthy();
	}));

	it('should return a bookshelf array', inject([BookshelvesService], (service: BookshelvesService) => {
		expect(service.list).toEqual(jasmine.any(Array));
	}));

	it('should return a specific icon name', inject([BookshelvesService], (service: BookshelvesService) => {
		expect(service.getIcon(0)).toMatch('favorite_border');
		expect(service.getIcon(3)).toMatch('list');
		expect(service.getIcon(2)).toMatch('list');
		expect(service.getIcon(4)).toMatch('list');
		expect(service.getIcon(6)).toMatch('access_time');
		expect(service.getIcon(8)).toMatch('explore');
	}));
});
