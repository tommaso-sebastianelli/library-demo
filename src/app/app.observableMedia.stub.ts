import { of } from "rxjs/observable/of";

export let ObservableMediaStub = {
	asObservable() {
		return of({ mqAlias: 'md' });
	},
	isActive(val: String) {
		return true;
	}
};
