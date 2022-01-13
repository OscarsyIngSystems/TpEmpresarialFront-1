import { AfterContentInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { InfoDetail } from 'src/app/models/infoDetail';
import { StorageService } from 'src/app/services/shared/storage.service';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.scss'],
})
export class AccountFormComponent implements OnInit, AfterContentInit {
  public contentLabels = 'accounts.account-detail-oportunity.';
  public accountId;
  public principalDataForm!: FormGroup;
  public addressInformationForm!: FormGroup;
  public systemInformationForm!: FormGroup;
  public segments!: any[];
  defaultContact = '';
  infoDetail: Array<InfoDetail> = [
    {
      name: 'Nombre de la cuenta',
      value: '7-ELEVEN MEXICO',
    },
    {
      name: 'ID cliente único',
      value: '873827',
    },
    {
      name: 'Folio cuenta',
      value: 'CRM-02010634',
    },
    {
      name: 'RFC',
      value: 'SEM980701STA',
    },
    {
      name: 'Segmento',
      value: 'I',
    },
  ];

  // tslint:disable-next-line: variable-name
  constructor(
    private _url: ActivatedRoute,
    private fb: FormBuilder,
    public storageService: StorageService
  ) {
    this.accountId = this._url.snapshot.paramMap.get('id');
    this.initPrincipalDataForm();
    this.initAddressInformationForm();
    this.initSystemInformationForm();
  }

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    this.defaultContact =
      this.principalDataForm.get('principal_contact')?.value;
    console.log(this.defaultContact);
  }

  public isAdmin(): boolean {
    return false;
  }

  public initPrincipalDataForm(): void {
    this.principalDataForm = this.fb.group({
      regime: ['Moral', Validators.required],
      // account_name: ['', Validators.required],
      enterprise_name: ['7-ELEVEN MEXICO SA DE CV', Validators.required],
      // main_account: ['????', Validators.required],
      // tax_identification: ['', Validators.required],
      account_class: ['Cliente', Validators.required],
      account_number: ['????', Validators.required],
      urban_reference: ['????', Validators.required],
      // billing_segment: ['Corporativos', Validators.required],
      potencial_billing_amount: ['Más de $500,001', Validators.required],
      // segment: ['1', Validators.required],
      phone: ['8116311537', Validators.required],
      website: ['????', Validators.required],
      sector: ['Industria', Validators.required],
      size: ['Corporativo -  más de 250', Validators.required],
      employees_amount: ['1000', Validators.required],
      isVip: [true, Validators.required],
      principal_contact: ['Edgar Eduardo Alvarez De Leon', Validators.required],
    });
    this.principalDataForm.disable();
  }

  public initAddressInformationForm(): void {
    this.addressInformationForm = this.fb.group({
      street: ['Munich', Validators.required],
      number: [195, Validators.required],
      interior_number: ['B', Validators.required],
      town: ['CUAUHTEMOC 1 SECTOR', Validators.required],
      // map: ['', Validators.required],
      county: ['San Nicolás de los Garza', Validators.required],
      city: ['MONTERREY', Validators.required],
      state: ['Nuevo León', Validators.required],
      cp: ['66450', Validators.required],
      geolocation: ["'25°43'9''N 100°22'35''W'", Validators.required],
    });
    this.addressInformationForm.disable();
  }

  public initSystemInformationForm(): void {
    this.systemInformationForm = this.fb.group({
      createdBy: ['ALMA CAROLINA LOZANO FUENTES', Validators.required],
      creationDate: ['20/12/2018 09:36 AM', Validators.required],
      accountOwner: ['PABLO LEIJA SANDOVAL', Validators.required],
      lastUpdatedBy: ['ERIKA CECILIA CONTRERAS JIMENEZ', Validators.required],
      lastUpdatedDate: ['2/12/2021 02:07 PM', Validators.required],
      originCRM: ['????', Validators.required],
      account_registration_type: ['????', Validators.required],
    });
    this.systemInformationForm.disable();
  }
}
