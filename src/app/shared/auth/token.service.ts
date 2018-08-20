import { Injectable } from '@angular/core';
import { AuthService } from '../../../assets/libs/angularx-social-login-master';
import { Observable } from 'rxjs/Observable';
import { isNullOrUndefined } from 'util';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class TokenService {

	private USER_ID: string = null;
	private _anyToken: BehaviorSubject<boolean> = new BehaviorSubject(false);

	constructor(private authService: AuthService) {
		this.authService.authState.subscribe(user => {
			if (!isNullOrUndefined(user)) {
				this.USER_ID = user.id;
				if (!isNullOrUndefined(user.authToken)) {
					// store token in localStorage
					this.save(user);
				}
			} else {
				this.delete();
			}
			this.emit();
		});
	}

	get authClaim(): Observable<boolean> {
		return this._anyToken.asObservable();
	}

	save(user: any): void {
		localStorage.setItem(this.USER_ID, JSON.stringify(user));
		this.emit();
	}

	get(): any {
		return JSON.parse(localStorage.getItem(this.USER_ID));
	}

	delete(): void {
		localStorage.removeItem(this.USER_ID);
		this.emit();
	}

	private emit(): void {
		this._anyToken.next(!isNullOrUndefined(this.get()));
	}
}
