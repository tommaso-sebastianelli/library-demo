import { Injectable } from '@angular/core';
import { MatDialogModule, MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material/dialog';

import { LoadingDialogComponent } from "../loading/loading-dialog/loading-dialog.component";

class DIALOG_CONFIG extends MatDialogConfig {
  constructor() {
    super();
    this.disableClose = true;
  }
}

@Injectable()
export class LoadingService {
  private dialogRef: MatDialogRef<LoadingDialogComponent>;

  constructor(private dialog: MatDialog) { }

  public wait() {
    this.dialogRef = this.dialog.open(LoadingDialogComponent, new DIALOG_CONFIG());
  };
  public done() {
    this.dialog.closeAll();//FIXME: dialogRef.close() should be used, but somehow it's not working
  };

}
