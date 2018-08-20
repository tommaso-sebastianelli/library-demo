import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { TokenService } from './shared/auth/token.service';
import { ROUTER_HOMEPAGE } from './app.config';

@Injectable()
export class AuthenticatedGuard implements CanActivate {
	constructor(private token: TokenService, private router: Router) {

	}

	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
		return this.token.authClaim.map(isAuthenticated => {
			if (isAuthenticated) {
				return true;
			}
			this.router.navigateByUrl(ROUTER_HOMEPAGE);
			return false;
		});
	}
}
