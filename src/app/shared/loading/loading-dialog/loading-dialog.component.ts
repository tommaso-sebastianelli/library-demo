import { Component, Inject, OnInit } from '@angular/core';

// import { MAT_DIALOG_DATA } from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-loading-dialog',
  templateUrl: './loading-dialog.component.html',
  styleUrls: ['./loading-dialog.component.scss']
})
export class LoadingDialogComponent implements OnInit {
  constructor(/*@Inject(MAT_DIALOG_DATA) public data: any*/) { }

  ngOnInit() {

  }

}
