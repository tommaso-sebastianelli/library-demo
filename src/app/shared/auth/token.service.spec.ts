import { TestBed, inject } from '@angular/core/testing';

import { TokenService } from './token.service';
import { TokenServiceStub } from './token.stub';
import { AuthService, AuthServiceConfig } from '../../../assets/libs/angularx-social-login-master';

describe('TokenService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				TokenService,
				{
					provide: AuthService,
					useValue: AuthServiceConfig
				},
				{
					provide: TokenService,
					useValue: TokenServiceStub
				},
			]
		});
	});

	it('should be created', inject([TokenService], (service: TokenService) => {
		expect(service).toBeTruthy();
	}));

	it('should be return an observable of boolean', inject([TokenService], (service: TokenService) => {
		service.authClaim.subscribe(
			res => {
				expect(res).toEqual(jasmine.any(Boolean));
			}
		);
	}));

	it('should emit a boolean after saving', inject([TokenService], (service: TokenService) => {
		expect(service.get()).toBeUndefined;
		let user_data = {
			name: 'test',
			token: 'xxxxx'
		};
		service.save(user_data);
		service.authClaim.subscribe(res => {
			expect(res).toBeTruthy();
		});
	}));

	it('should emit a boolean after deleting', inject([TokenService], (service: TokenService) => {
		expect(service.get()).toBeUndefined;
		service.delete();
		service.authClaim.subscribe(res => {
			expect(res).toBeTruthy();
		});
	}));
});
