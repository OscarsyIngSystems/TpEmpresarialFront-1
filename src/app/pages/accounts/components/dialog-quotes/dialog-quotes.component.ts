import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  name: string;
}
@Component({
  selector: 'app-dialog-quotes',
  templateUrl: './dialog-quotes.component.html',
  styleUrls: ['./dialog-quotes.component.scss'],
})
export class DialogQuotesComponent implements OnInit {
  public contentLabels = 'accounts.dialogs-quotes.';

  constructor(
    public dialogRef: MatDialogRef<DialogQuotesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {}
}
