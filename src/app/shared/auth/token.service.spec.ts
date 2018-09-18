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
});
