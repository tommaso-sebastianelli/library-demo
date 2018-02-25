import { Injectable } from '@angular/core';
import { MatDialogModule, MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material/dialog';

import { LoadingDialogComponent } from "../loading/loading-dialog/loading-dialog.component";

class DIALOG_CONFIG extends MatDialogConfig {
  constructor(_message: string) {
    super();
    this.data.message = _message;
  }
}

class Loader {
  dialogRef: MatDialogRef<any>;
  message: string;

  constructor(private dialog: MatDialog, message?: string) { }

  public wait() {
    this.dialogRef = this.dialog.open(LoadingDialogComponent, new DIALOG_CONFIG(this.message));
  };
  public done() {
    this.dialogRef.close();
  };

}

@Injectable()
export class LoadingService {

  constructor(private dialog: MatDialog) { }

  public create(message?: string) {
    return new Loader(this.dialog);
  }

}
