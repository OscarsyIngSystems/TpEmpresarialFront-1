import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-massive-load-sites',
  templateUrl: './dialog-massive-load-sites.component.html',
  styleUrls: ['./dialog-massive-load-sites.component.scss'],
})
export class DialogMassiveLoadSitesComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogMassiveLoadSitesComponent>
  ) // @Inject(MAT_DIALOG_DATA) public data: DialogData
  {}
  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {}
}
