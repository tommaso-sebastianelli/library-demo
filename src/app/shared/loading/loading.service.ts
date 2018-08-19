import { Injectable } from '@angular/core';
import { MatDialogModule, MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material/dialog';
import { Observable } from 'rxjs/Observable';

import { LoadingDialogComponent } from './loading-dialog/loading-dialog.component';

class DialogConfig extends MatDialogConfig {
  constructor() {
    super();
    this.disableClose = true;
    this.panelClass = "loading-box"
  }
}

@Injectable()
export class LoadingService {
  private dialogRef: MatDialogRef<LoadingDialogComponent>;

  constructor(private dialog: MatDialog) { }

  public wait(): Observable<any> {
    this.dialogRef = this.dialog.open(LoadingDialogComponent, new DialogConfig());
    return this.dialogRef.afterOpen();
  }
  public done(): Observable<any> {
    this.dialog.closeAll(); // FIXME: dialogRef.close() should be used, but somehow it's not working
    return this.dialogRef.afterClosed();
  }

}
