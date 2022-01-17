import { state } from '@angular/animations';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/shared/storage.service';

export interface DialogData {
  name: string;
  data: any;
}

@Component({
  selector: 'app-dialog-oportunities',
  templateUrl: './dialog-oportunities.component.html',
  styleUrls: ['./dialog-oportunities.component.scss'],
})
export class DialogOportunitiesComponent implements OnInit {
  public contentLabels = 'accounts.dialogs-opportunities.';

  constructor(
    private storageService: StorageService,
    private router: Router,
    public dialogRef: MatDialogRef<DialogOportunitiesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}
  goCreate(): void {
    this.router.navigateByUrl('quotes/create/5454545', {
      state: { data: this.data.data },
    });
    this.storageService.setDataName(null);
    this.dialogRef.close();
  }
  ngOnInit(): void {}
}
