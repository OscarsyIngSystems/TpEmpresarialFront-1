import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Oportunity } from 'src/app/models/Oportunity';
import { DialogOportunitiesComponent } from '../dialogs/dialog-oportunities/dialog-oportunities.component';

@Component({
  selector: 'app-oportunity-form',
  templateUrl: './oportunity-form.component.html',
  styleUrls: ['./oportunity-form.component.scss'],
})
export class OportunityFormComponent implements OnInit {
  @Input() oportunityDetailData!: Oportunity;
  @Output() edit: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() saveData: EventEmitter<any> = new EventEmitter<any>();
  isEditing: boolean = false;
  public accountId;
  public oportunityForm: FormGroup;
  name = '“Prueba de sistemas”';
  hld!: File;
  auxForm: any = {};
  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private _url: ActivatedRoute,
    private router: Router
  ) {
    // console.log(this._url);
    this.accountId = this._url.snapshot.paramMap.get('id');
    this.oportunityForm = this.fb.group({
      accountName: [''],
      closeDate: [new Date(), Validators.required],
      stage: ['0'],
      amount: ['$1,290,800'],
      reason: [],
      description: [''],
      oportunityName: ['', Validators.required],
      probability: ['10%'],
      badge: ['MXN - Peso Mexicano', [Validators.required]],
      oportunityOrigin: ['one', Validators.required],
      trybuy: [],
      executive: ['Sergio Aparicio Contreras'],
      whoIntegrated: ['one', [Validators.required]],
      saleType: ['0', Validators.required],
      finderFee: [''],
      collaboratorName: [],
      collaboratorNumber: [],
      distributor: [],
      hld: [],
    });
    this.oportunityForm.get('badge')?.disable();
    this.oportunityForm.get('probability')?.disable();
    this.oportunityForm.get('executive')?.disable();
    this.oportunityForm.get('reason')?.disable();
  }

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    if (this.oportunityDetailData) {
      this.oportunityForm.patchValue(this.oportunityDetailData);
      console.log(this.oportunityDetailData);
      
      if (
        this.oportunityDetailData.isMixedSale == 'false' &&
        (this.oportunityDetailData.isParter == 'false' ||
          this.oportunityDetailData.isParter === undefined)
      ) {
        this.oportunityForm.patchValue({ saleType: '0' });
      } else {
        if (this.oportunityDetailData.isMixedSale == 'true') {
          this.oportunityForm.patchValue({ saleType: '1' });
        } else {
          this.oportunityForm.patchValue({ saleType: '2' });
        }
      }
      this.oportunityForm.disable();

    }
  }

  openDialog(): void {
    this.name = this.oportunityForm.controls.oportunityName.value;
    console.log(this.oportunityDetailData)
    this.oportunityForm.enable();
    let data = this.oportunityForm.value;
    this.oportunityForm.disable();
    const dialogRef = this.dialog.open(DialogOportunitiesComponent, {
      width: '393px',
      height: '291px',
      data: { name: this.name, data },
    });
  }

  get saleType(): string {
    return this.oportunityForm.value.saleType;
  }

  selectFile(file: File) {
    this.hld = file;
  }

  editForm() {
    this.oportunityForm.enable();
    Object.assign(this.auxForm, this.oportunityForm.value);
    this.oportunityForm.disable();
    this.oportunityForm.get('closeDate')?.enable();
    this.oportunityForm.get('stage')?.enable();
    this.oportunityForm.get('trybuy')?.enable();
    this.oportunityForm.get('saleType')?.enable();
    this.oportunityForm.get('description')?.enable();
    this.handdleTryBuy();
    this.edit.emit(true);
    this.isEditing = true;
  }

  cancel() {
    if (this.isEditing) {
      this.isEditing = false;
      this.edit.emit(false);
      this.oportunityForm.patchValue(this.auxForm);
      this.oportunityForm.disable();
    } else {
      this.router.navigate(['accounts/detail/454545']);
    }
  }

  handdleTryBuy() {
    if (this.oportunityForm.get('trybuy')?.value) {
      this.oportunityForm.get('reason')?.enable();
    } else {
      this.oportunityForm.get('reason')?.disable();
    }
  }
}
