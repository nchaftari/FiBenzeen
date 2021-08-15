import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-update-status',
  templateUrl: './update-status.component.html',
  styleUrls: ['./update-status.component.css'],
})
export class UpdateStatusComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds = 5;

  status: string = '';
  constructor(
    public dialogRef: MatDialogRef<UpdateStatusComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  onNoClick(): void {
    // this.data.item.quantityDone = this.qDone
    // this.data.item.quantity = this.qTotal
    // this.data.item.status = this.status;
    this.dialogRef.close();
  }
  finalize() {
    if (this.status != '') {
      this.openSnackBar('Thank you ! You chose ' + this.status + '.');
      this.dialogRef.close();
    } else {
      this.openSnackBar('Please select a status.');
    }
  }
  onValChange(value: any) {
    // this.count = 0
    this.status = value;
  }
  openSnackBar(text: string) {
    this._snackBar.open(text, 'Ok', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds * 1000,
    });
  }
}
