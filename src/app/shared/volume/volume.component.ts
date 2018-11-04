import { Component, Input, OnInit } from '@angular/core';

import { Animations } from '../../app.animations';
import { IVolume } from '../api/ivolume';
import { TokenService } from '../auth/token.service';
import { BookshelvesService } from '../bookshelves/bookshelves.service';
import { VolumeAction } from './volume-action';

@Component({
	selector: 'app-volume',
	templateUrl: './volume.component.html',
	styleUrls: ['./volume.component.scss'],
	animations: Animations
})
export class VolumeComponent implements OnInit {
	@Input() data: IVolume;
	@Input() volumeActions: VolumeAction[];
	animations: any;
	constructor(protected tokenService: TokenService) {
		this.animations = {};
	}

	ngOnInit() {

	}

	isFavourite(id: number): boolean {
		return false;
	}
}
