import { Component, Input, OnInit } from '@angular/core';

import { Animations } from '../../app.animations';
import { IVolume } from '../api/ivolume';

@Component({
	selector: 'app-volume',
	templateUrl: './volume.component.html',
	styleUrls: ['./volume.component.scss'],
	animations: Animations
})
export class VolumeComponent implements OnInit {
	@Input() data: IVolume;
	animations: any;
	constructor() {
		this.animations = {};
	}

	ngOnInit() {

	}

}
