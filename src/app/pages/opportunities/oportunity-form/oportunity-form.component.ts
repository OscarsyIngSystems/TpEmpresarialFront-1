import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogOportunitiesComponent } from '../../accounts/components/dialog-oportunities/dialog-oportunities.component';

@Component({
  selector: 'app-oportunity-form',
  templateUrl: './oportunity-form.component.html',
  styleUrls: ['./oportunity-form.component.scss'],
})
export class OportunityFormComponent implements OnInit {
  public oportunityForm: FormGroup;
  name = '“Prueba de sistemas”';

  constructor(private fb: FormBuilder, public dialog: MatDialog) {
    this.oportunityForm = this.fb.group({
      accountName: [''],
      closeDate: ['', Validators.required],
      postSaleFlow: [''],
      description: [''],
      oportunityName: ['', Validators.required],
      probability: [''],
      badge: ['', Validators.required],
      oportunityOrigin: ['', Validators.required],
      tryby: [false],
      executive: [''],
    });
  }

  ngOnInit(): void {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOportunitiesComponent, {
      width: '393px',
      height: '291px',
      data: { name: this.name },
    });
  }
}
