import { Injectable } from '@angular/core';
import { MatDialogModule, MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material/dialog';

import { ErrorDialogComponent } from "../error/error-dialog/error-dialog.component";

class DIALOG_CONFIG extends MatDialogConfig {
  constructor() {
    super();
    // this.disableClose = true;
  }
}

@Injectable()
export class ErrorService {
  private dialogRef: MatDialogRef<ErrorDialogComponent>;

  constructor(private dialog: MatDialog) { }

  public throw(e: Error) {
    this.dialogRef = this.dialog.open(ErrorDialogComponent, new DIALOG_CONFIG());
  };
}
