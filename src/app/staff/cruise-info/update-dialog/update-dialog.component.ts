
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-update-dialog',
  templateUrl: './update-dialog.component.html',
  styleUrls: ['./update-dialog.component.scss'],
})
export class UpdateDialogComponent {

  updatedCruise: any;

  constructor(
    public dialogRef: MatDialogRef<UpdateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    // Clone the data to avoid modifying the original cruise object directly
    this.updatedCruise = { ...data.cruise };
  }

  closeDialog(saveChanges: boolean): void {
    if (saveChanges) {
      this.dialogRef.close(this.updatedCruise);
    } else {
      this.dialogRef.close(null);
    }
  }
}



