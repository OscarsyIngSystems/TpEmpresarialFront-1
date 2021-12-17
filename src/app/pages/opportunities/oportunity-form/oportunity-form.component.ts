import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Oportunity } from 'src/app/models/Oportunity';
import { DialogOportunitiesComponent } from '../../accounts/components/dialog-oportunities/dialog-oportunities.component';

@Component({
  selector: 'app-oportunity-form',
  templateUrl: './oportunity-form.component.html',
  styleUrls: ['./oportunity-form.component.scss'],
})
export class OportunityFormComponent implements OnInit {
  @Input() oportunityDetailData!: Oportunity;
  public oportunityForm: FormGroup;
  name = '“Prueba de sistemas”';

  constructor(private fb: FormBuilder, public dialog: MatDialog) {
    this.oportunityForm = this.fb.group({
      accountName: [''],
      closeDate: ['', Validators.required],
      stage: ['0'],
      amount: [''],
      reason: [''],
      description: [''],
      oportunityName: ['', Validators.required],
      probability: ['10%'],
      badge: ['MXN - Peso Mexicano', Validators.required],
      oportunityOrigin: ['', Validators.required],
      trybuy: [false],
      executive: [''],
      whoIntegrated: [''],
    });
    this.oportunityForm.get('badge')?.disable();
    this.oportunityForm.get('probability')?.disable();
  }

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    if (this.oportunityDetailData) {
      this.oportunityForm.patchValue(this.oportunityDetailData);
      this.oportunityForm.disable();
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOportunitiesComponent, {
      width: '393px',
      height: '291px',
      data: { name: this.name },
    });
  }
}
