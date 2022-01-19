import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-dialog-deleted-sites',
  templateUrl: './dialog-deleted-sites.component.html',
  styleUrls: ['./dialog-deleted-sites.component.scss']
})
export class DialogDeletedSitesComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: string,
    private dialogRef: MatDialogRef<DialogDeletedSitesComponent>) { }

  ngOnInit(): void {
  }

  onClose() {
    this.dialogRef.close({ data: 'accept' })
  }
}
