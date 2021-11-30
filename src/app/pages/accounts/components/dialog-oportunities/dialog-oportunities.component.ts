import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-dialog-oportunities',
  templateUrl: './dialog-oportunities.component.html',
  styleUrls: ['./dialog-oportunities.component.scss'],
})
export class DialogOportunitiesComponent implements OnInit {
  public contentLabels = 'accounts.dialogs-opportunities.';

  constructor(
    public dialogRef: MatDialogRef<DialogOportunitiesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {}
}
