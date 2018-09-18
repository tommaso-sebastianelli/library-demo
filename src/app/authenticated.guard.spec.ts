import { TestBed, inject } from '@angular/core/testing';
import { TokenService } from './shared/auth/token.service';
import { TokenServiceStub } from './shared/auth/token.stub';
import { AuthenticatedGuard } from './authenticated.guard';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthenticatedGuard', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [RouterTestingModule],
			providers: [
				AuthenticatedGuard,
				{ provide: TokenService, useValue: TokenServiceStub }
			]
		});
	});

	it('should init', inject([AuthenticatedGuard], (guard: AuthenticatedGuard) => {
		expect(guard).toBeTruthy();
	}));
});
