import { Injectable } from '@angular/core';
import { MatDialogModule, MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material/dialog';

import { ErrorDialogComponent } from "../error-handler/error-dialog/error-dialog.component";

class DIALOG_CONFIG extends MatDialogConfig {
  constructor() {
    super();
    // this.disableClose = true;
  }
}

@Injectable()
export class ErrorHandlerService {
  private dialogRef: MatDialogRef<ErrorDialogComponent>;

  constructor(private dialog: MatDialog) { }

  public wait() {
    this.dialogRef = this.dialog.open(ErrorDialogComponent, new DIALOG_CONFIG());
  };
  public done() {
    this.dialog.closeAll();//FIXME: dialogRef.close() should be used, but somehow it's not working
  };

}
