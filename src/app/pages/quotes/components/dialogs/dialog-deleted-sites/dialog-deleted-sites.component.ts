import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-deleted-sites',
  templateUrl: './dialog-deleted-sites.component.html',
  styleUrls: ['./dialog-deleted-sites.component.scss']
})
export class DialogDeletedSitesComponent implements OnInit {

  constructor( private dialogRef: MatDialogRef<DialogDeletedSitesComponent>) { }

  ngOnInit(): void {
  }

  onClose() {
    this.dialogRef.close()
  }
}
