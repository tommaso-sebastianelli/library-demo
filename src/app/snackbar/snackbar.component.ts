import { Component, OnInit, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent implements OnInit {
  messageId: string;
  undo: Function;

  constructor(@Inject(MAT_SNACK_BAR_DATA) data: any) {
    this.messageId = data.messageId;
    this.undo = !isNullOrUndefined(data.undo) ? data.undo : null;
  }

  ngOnInit() {
  }

}
