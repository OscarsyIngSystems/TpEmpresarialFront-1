import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.scss'],
})
export class AccountInfoComponent implements OnInit {
  public contentLabels = 'accounts.account-detail-oportunity.';
  public principalDataForm!: FormGroup;
  public addressInformationForm!: FormGroup;
  public descriptionForm!: FormGroup;
  public systemInformationForm!: FormGroup;
  public segments!: any[];

  constructor(private fb: FormBuilder) {
    this.initPrincipalDataForm();
    this.initAddressInformationForm();
    this.initDescriptionForm();
    this.initSystemInformationForm();
  }

  ngOnInit(): void {}

  public initPrincipalDataForm(): void {
    this.principalDataForm = this.fb.group({
      regime: ['', Validators.required],
      account_name: ['', Validators.required],
      enterprise_name: ['', Validators.required],
      main_account: ['', Validators.required],
      tax_identification: ['', Validators.required],
      account_class: ['', Validators.required],
      account_number: ['', Validators.required],
      urban_reference: ['', Validators.required],
      billing_segment: ['', Validators.required],
      potencial_billing_amount: ['', Validators.required],
      segment: ['1', Validators.required],
      phone: ['', Validators.required],
      website: ['', Validators.required],
      sector: ['', Validators.required],
      size: ['', Validators.required],
      employees_amount: ['', Validators.required],
      isVip: ['', Validators.required],
      account_id: ['', Validators.required],
    });
  }

  public initAddressInformationForm(): void {
    this.addressInformationForm = this.fb.group({
      street: ['', Validators.required],
      number: ['', Validators.required],
      interior_number: ['', Validators.required],
      town: ['', Validators.required],
      map: ['', Validators.required],
      account_registration_type: ['', Validators.required],
      county: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      cp: ['', Validators.required],
      employees_amount: ['', Validators.required],
      geolocation: ['', Validators.required],
    });
  }

  public initDescriptionForm(): void {
    this.descriptionForm = this.fb.group({
      description: [''],
    });
  }

  public initSystemInformationForm(): void {
    this.systemInformationForm = this.fb.group({
      createdBy: ['', Validators.required],
      originCRM: ['', Validators.required],
      lastUpdatedBy: ['', Validators.required],
      accountOwner: ['', Validators.required],
    });
  }
}
