import { Injectable } from '@angular/core';
import { ConfirmationDialogComponent } from './../component/confirmation-dialog/confirmation-dialog.component';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs';
import { Confirmation } from '../common/interfaces';
@Injectable({
  providedIn: 'root'
})
export class FeaturesService {

  constructor(public dialog: MatDialog) { }

  confirmDialog(confirmation: Confirmation): Observable<boolean> {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '25%',
      data: confirmation
    });
    return dialogRef.afterClosed();
  }
  
}
