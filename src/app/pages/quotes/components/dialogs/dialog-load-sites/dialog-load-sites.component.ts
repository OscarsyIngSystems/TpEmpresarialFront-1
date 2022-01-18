import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-load-sites',
  templateUrl: './dialog-load-sites.component.html',
  styleUrls: ['./dialog-load-sites.component.scss']
})
export class DialogLoadSitesComponent implements OnInit {
  public contentLabels = 'accounts.dialogs-massive-load.';
  constructor(
    private dialogRef: MatDialogRef<DialogLoadSitesComponent>,
    private router: Router
    ) { }


  ngOnInit(): void {}

  onClose() {
    this.dialogRef.close()
  }

  onSubmit() {
    this.router.navigate(['/quotes/loaded-sites'])
    this.onClose()
  }

}
