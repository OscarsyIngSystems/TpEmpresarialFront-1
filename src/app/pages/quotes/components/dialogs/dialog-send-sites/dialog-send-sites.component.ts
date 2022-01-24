import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-send-sites',
  templateUrl: './dialog-send-sites.component.html',
  styleUrls: ['./dialog-send-sites.component.scss']
})
export class DialogSendSitesComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<DialogSendSitesComponent>,
    private router: Router
    ) { }

  ngOnInit(): void {}

  onSubmit() {
    this.router.navigate(['/quotes/loaded-sites'])
    this.onClose()
  }

  onClose() {
    this.dialogRef.close()
  }

}
