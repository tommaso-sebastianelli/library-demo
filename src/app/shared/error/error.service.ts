import { Injectable } from '@angular/core';
import { MatDialogModule, MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material/dialog';
import { Observable } from 'rxjs/Observable';

import { ErrorDialogComponent } from "./error-dialog/error-dialog.component";

class DIALOG_CONFIG extends MatDialogConfig {
  constructor(e: Error) {
    super();
    this.data = e;
    this.width = "450px";
    // this.disableClose = true;
  }
}

@Injectable()
export class ErrorService {
  private dialogRef: MatDialogRef<ErrorDialogComponent>;

  constructor(private dialog: MatDialog) { }

  public throw(e: Error): Observable<any> {
    let config = new DIALOG_CONFIG(e);
    this.dialogRef = this.dialog.open(ErrorDialogComponent, config);
    return this.dialogRef.afterClosed();
  };
}
