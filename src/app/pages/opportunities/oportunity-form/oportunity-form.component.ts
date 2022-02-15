import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Catalog, SimpleCatalog } from 'src/app/models/Catalogs';
import { Oportunity } from 'src/app/models/Oportunity';
import { CatalogsService } from 'src/app/services/catalogs/catalogs.service';
import { LoginService } from 'src/app/services/login/login.service';
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
  catalogOrigin: SimpleCatalog[] = [];
  catalogIntegrator: Catalog[] = [];

  constructor(
    private fb: FormBuilder,
    private _url: ActivatedRoute,
    private router: Router,
    public _loginServices: LoginService,
    private _serviceCatalogs: CatalogsService
  ) {
    this.accountId = this._url.snapshot.paramMap.get('id');
    this.oportunityForm = this.fb.group({
      closeDate: [, Validators.required],
      stage: [''],
      amount: [''],
      reason: [],
      description: [''],
      oportunityName: ['', Validators.required],
      probability: ['10%'],
      badge: ['Peso', [Validators.required]],
      oportunityOrigin: ['', Validators.required],
      trybuy: [false],
      executive: [''],
      whoIntegrated: ['', [Validators.required]],
      saleType: [''],
      finderFee: [''],
      collaboratorName: [],
      collaboratorNumber: [],
      distributor: [],
    });
    this.oportunityForm.get('badge')?.disable();
    this.oportunityForm.get('probability')?.disable();
    this.oportunityForm.get('executive')?.disable();
    this.oportunityForm.get('reason')?.disable();
  }

  ngOnInit(): void {
    this.getCatalogOpportunityOrigin();
  }

  ngAfterContentInit(): void {
    if (this.oportunityDetailData) {
      this.oportunityForm.patchValue(this.oportunityDetailData);

      if (
        !this.oportunityDetailData.isMixedSale &&
        (!this.oportunityDetailData.isPartner ||
          this.oportunityDetailData.isPartner === undefined)
      ) {
        this.oportunityForm.patchValue({ saleType: '0' });
      } else {
        if (this.oportunityDetailData.isMixedSale) {
          this.oportunityForm.patchValue({ saleType: '1' });
        } else {
          this.oportunityForm.patchValue({ saleType: '2' });
        }
      }
      this.oportunityForm.disable();
    } else {
      this.getCatalogOpportunityIntegrator();
    }
  }

  openDialog(): void {
    this.saveData.emit(this.oportunityForm.value);
    this.name = this.oportunityForm.controls.oportunityName.value;

    this.oportunityForm.enable();
    let data = this.oportunityForm.value;
    this.oportunityForm.disable();
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

  getCatalogOpportunityOrigin() {
    this._serviceCatalogs
      .getCatalogOpportunityOrigin()
      .subscribe((response) => {
        this.catalogOrigin = response;
      });
  }
  getCatalogOpportunityIntegrator() {
    this._serviceCatalogs
      .getCatalogoOportunityIntegrator()
      .subscribe((response) => {
        this.catalogIntegrator = response;
      });
  }
}
