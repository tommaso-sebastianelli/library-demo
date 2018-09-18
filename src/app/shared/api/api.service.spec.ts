import { TestBed, inject } from '@angular/core/testing';

import { ApiService } from './api.service';
import { HttpModule } from '@angular/http';
import { TokenService } from '../auth/token.service';
import { TokenServiceStub } from '../auth/token.stub';
import { AuthService, AuthServiceConfig } from '../../../assets/libs/angularx-social-login-master';

describe('ApiService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				HttpModule
			],
			providers: [
				ApiService,
				{
					provide: TokenService,
					useValue: TokenServiceStub
				},
				{
					provide: AuthService,
					useValue: AuthServiceConfig
				},
			],
		});
	});

	it('should be created', inject([ApiService], (service: ApiService) => {
		expect(service).toBeTruthy();
	}));
});
