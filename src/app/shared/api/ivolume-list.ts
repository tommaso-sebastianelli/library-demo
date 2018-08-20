import { IVolume } from './ivolume';

export interface IVolumeList {
	kind: string;
	totalItems: number;
	items: Array<IVolume>;
}
