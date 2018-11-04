import { async as _async } from 'rxjs/scheduler/async';
import { of } from 'rxjs/observable/of';

export let TokenServiceStub = {
	isAuthenticated: true,
	get authClaim() {
		return of(this.isAuthenticated, _async);
	},
	get: () => { },
	save: () => { },
	delete: () => { }
};
