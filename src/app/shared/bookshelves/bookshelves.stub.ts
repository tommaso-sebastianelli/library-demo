export let BookshelvesServiceStub = {
	get list() {
		return [{ id: 0, name: 'test1' }, { id: 1, name: 'test2' }];
	},

	getIcon(id: number): string {
		return 'test';
	}
};
