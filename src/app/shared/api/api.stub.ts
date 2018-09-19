import { VolumeStub } from "../volume/volume.stub";
import { of } from "rxjs/observable/of";

export const ApiServiceStub = {
	volumeList: () => { },
	volumeGet: () => { return of(VolumeStub) },
	bookshelfList: () => { },
	bookshelfGet: () => { },
	bookshelfVolumeList: () => { },
	getHeaders: () => { }
}