import { Component, OnInit, Input, Inject } from '@angular/core';
import { IVolume } from '../api/ivolume';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-volume-detail',
  templateUrl: './volume-detail.component.html',
  styleUrls: ['./volume-detail.component.scss']
})
export class VolumeDetailComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    console.log(this.data);
  }

}
