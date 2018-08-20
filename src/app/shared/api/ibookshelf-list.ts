import { IBookshelf } from './ibookshelf';

export interface IBookshelfList {
	kind: string;
	items: Array<IBookshelf>;
}
