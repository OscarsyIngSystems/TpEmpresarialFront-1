import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-load-sites',
  templateUrl: './dialog-load-sites.component.html',
  styleUrls: ['./dialog-load-sites.component.scss']
})
export class DialogLoadSitesComponent implements OnInit {
  public contentLabels = 'accounts.dialogs-massive-load.';
  constructor(
    private dialogRef: MatDialogRef<DialogLoadSitesComponent>
    ) { }


  ngOnInit(): void {}

  onClose() {
    this.dialogRef.close()
  }

}
