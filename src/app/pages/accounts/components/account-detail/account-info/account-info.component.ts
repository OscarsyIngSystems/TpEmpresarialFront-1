import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.scss'],
})
export class AccountInfoComponent implements OnInit {
  public contentLabels = 'accounts.account-detail-oportunity.';
  public principalData!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.initPrincipalData();
  }

  ngOnInit(): void {}

  public initPrincipalData(): void {
    this.principalData = this.fb.group({
      type: ['', Validators.required],
      name: ['', Validators.required],
      account: ['', Validators.required],
      account_type: ['', Validators.required],
      account_id: ['', Validators.required],
      rfc: ['', Validators.required],
      reference: ['', Validators.required],
      enterprise_name: ['', Validators.required],
      account_class: ['', Validators.required],
      billing_segment: ['', Validators.required],
      potencial_billing_amount: ['', Validators.required],
      segment: ['', Validators.required],
      phone: ['', Validators.required],
      website: ['', Validators.required],
      sector: ['', Validators.required],
      size: ['', Validators.required],
      employees_amount: ['', Validators.required],
      isVip: ['', Validators.required],
    });
  }
}
