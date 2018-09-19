import { VolumeStub } from "../volume/volume.stub";
import { IVolumeList } from "../api/ivolume-list";

export const VolumeListStub: IVolumeList = {
	totalItems: 1,
	items: [
		VolumeStub
	],
	kind: "test"
};