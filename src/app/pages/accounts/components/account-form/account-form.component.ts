import { AfterContentInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { InfoDetail } from 'src/app/models/infoDetail';
import { AccountsService } from 'src/app/services/accounts/accounts.service';
import { StorageService } from 'src/app/services/shared/storage.service';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.scss'],
})
export class AccountFormComponent implements OnInit, AfterContentInit {
  public contentLabels = 'accounts.account-detail-oportunity.';
  public accountId: any = '';
  public principalDataForm!: FormGroup;
  public addressInformationForm!: FormGroup;
  public systemInformationForm!: FormGroup;
  public segments!: any[];
  defaultContact = '';
  infoDetail: Array<InfoDetail> = [];

  // tslint:disable-next-line: variable-name
  constructor(
    private _url: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    public storageService: StorageService,
    private stService: StorageService,
    private spinner: NgxSpinnerService
  ) {
    this.accountId = this._url.snapshot.paramMap.get('id')
      ? this._url.snapshot.paramMap.get('id')
      : '';
    this.initPrincipalDataForm();
    this.initAddressInformationForm();
    this.initSystemInformationForm();
  }

  ngOnInit(): void {
    this.spinner.show();
    this.getDetailAccountId();
  }

  ngAfterContentInit(): void {
    this.defaultContact = this.principalDataForm.get('mainContact')?.value;
  }

  private getDetailAccountId(): void {
    const detail: any = this.stService.getObjetSelected;
    if (detail) {
      this.infoDetail = [
        {
          name: 'Nombre de la cuenta',
          value: detail.accountName,
        },
        {
          name: 'ID cliente único',
          value: detail.clientId,
        },
        {
          name: 'Folio cuenta',
          value: detail.accountId,
        },
        {
          name: 'RFC',
          value: detail.taxIdentification,
        },
        {
          name: 'Segmento',
          value: detail.segment,
        },
      ];
      this.principalDataForm.patchValue(detail);
      this.addressInformationForm.patchValue(detail.addressInfo);
      this.systemInformationForm.patchValue(detail.systemInfo);
      this.principalDataForm.disable();
      this.addressInformationForm.disable();
      this.systemInformationForm.disable();
    } else {
      this.router.navigate(['/accounts']);
    }
    this.spinner.hide();
  }

  public isAdmin(): boolean {
    return false;
  }

  public initPrincipalDataForm(): void {
    this.principalDataForm = this.fb.group({
      regime: ['', Validators.required],
      enterpriseName: ['', Validators.required],
      accountClass: ['', Validators.required],
      accountNumber: ['', Validators.required],
      potencialBillingAmount: ['', Validators.required],
      phone: ['', Validators.required],
      website: ['', Validators.required],
      sector: ['', Validators.required],
      size: ['', Validators.required],
      employeesAmount: ['', Validators.required],
      isVip: [, Validators.required],
      mainContact: ['', Validators.required],
    });
  }

  public initAddressInformationForm(): void {
    this.addressInformationForm = this.fb.group({
      street: ['', Validators.required],
      outdoorNumber: [, Validators.required],
      indoorNumber: ['', Validators.required],
      neighborhood: ['', Validators.required],
      municipality: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', Validators.required],
      geolocation: ['', Validators.required],
    });
  }

  public initSystemInformationForm(): void {
    this.systemInformationForm = this.fb.group({
      createdBy: ['', Validators.required],
      creationDate: ['', Validators.required],
      accountOwner: ['', Validators.required],
      lastUpdatedBy: ['', Validators.required],
      lastUpdatedDate: ['', Validators.required],
      originCrmId: ['', Validators.required],
      accountRegistrationType: ['', Validators.required],
    });
  }
}
