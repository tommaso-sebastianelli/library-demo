import { Component, OnInit, Inject, ChangeDetectorRef, AfterViewChecked } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IVolume } from '../api/ivolume';

@Component({
  selector: 'app-volume-detail',
  templateUrl: './volume-detail.component.html',
  styleUrls: ['./volume-detail.component.scss']

})
export class VolumeDetailComponent implements OnInit, AfterViewChecked {
  constructor(public dialogRef: MatDialogRef<VolumeDetailComponent>, @Inject(MAT_DIALOG_DATA) public data: IVolume | any, public cd: ChangeDetectorRef) { }

  ngOnInit() {
    console.log(this.data);
  }

  ngAfterViewChecked() {
    this.cd.detectChanges();
  }

}
