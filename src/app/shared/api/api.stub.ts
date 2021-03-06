import { VolumeStub } from '../volume/volume.stub';
import { of } from 'rxjs/observable/of';
import { IBookshelfList } from './ibookshelf-list';
import { IBookshelf } from './ibookshelf';
import { IVolumeList } from './ivolume-list';
import { VolumeListStub } from '../volume-showcase/volume-list.stub';

export const ApiServiceStub = {
	volumeList: () => of(<IVolumeList>VolumeListStub),
	volumeGet: () => of(VolumeStub),
	bookshelfList: () => {
		return of(<IBookshelfList>{ kind: 'bookshelf-list', items: [{ kind: 'bookhelf', title: 'test' }] });
	},
	bookshelfGet: () => of(<IBookshelf>{ kind: 'bookhelf', title: 'test' }),
	bookshelfVolumeList: () => {
		return of(<IVolumeList>VolumeListStub);
	},
	getHeaders: () => { }
};
