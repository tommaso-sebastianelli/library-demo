import { Component, Input, OnInit } from '@angular/core';

import { Animations } from '../../app.animations';
import { IVolume } from '../api/ivolume';
import { ApiService } from '../api/api.service';
import { TokenService } from '../auth/token.service';
import { MatDialog } from '@angular/material';
import { VolumeAction } from './volume-action';
import { VolumeDetailComponent } from '../volume-detail/volume-detail.component';
import { VolumeStub } from './volume.stub';

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
	constructor(public tokenService: TokenService, public detailDialog: MatDialog, public api: ApiService) {
		this.animations = {};
	}

	ngOnInit() {
	}

	isFavourite(id: number): boolean {
		// TODO store favourites list to handle the favourite/unfavourite option
		return false;
	}

	showDetail(): void {
		this.api.volumeGet(this.data.id).subscribe(
			volume => {
				this.detailDialog.open(VolumeDetailComponent, {
					width: '500px',
					data: volume
				});
			},
			error => {
				console.error(error);
			}
		);
	}

	onMenuClick(e: Event) {
		e.preventDefault();
		e.stopImmediatePropagation();
	}
}
