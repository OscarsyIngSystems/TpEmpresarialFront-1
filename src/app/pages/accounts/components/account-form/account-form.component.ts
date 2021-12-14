import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { InfoDetail } from 'src/app/models/infoDetail';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.scss'],
})
export class AccountFormComponent implements OnInit {
  public contentLabels = 'accounts.account-detail-oportunity.';
  public principalDataForm!: FormGroup;
  public addressInformationForm!: FormGroup;
  public systemInformationForm!: FormGroup;
  public segments!: any[];
  infoDetail: Array<InfoDetail> = [
    {
      name: 'Nombre de la cuenta',
      value: 'Audi CDMX',
    },
    {
      name: 'Folio Cuenta',
      value: 'CRM-00022445',
    },
    {
      name: 'RFC',
      value: 'HSP030709EA2',
    },
    {
      name: 'Segmento',
      value: 'I',
    },
  ];

  constructor(private fb: FormBuilder) {
    this.initPrincipalDataForm();
    this.initAddressInformationForm();
    this.initSystemInformationForm();
  }

  ngOnInit(): void {}

  public isAdmin(): boolean {
    return false;
  }

  public initPrincipalDataForm(): void {
    this.principalDataForm = this.fb.group({
      regime: ['Moral', Validators.required],
      // account_name: ['', Validators.required],
      enterprise_name: ['Hazak Seguridad Privada', Validators.required],
      main_account: ['Pequeñas', Validators.required],
      // tax_identification: ['', Validators.required],
      account_class: ['Prospecto', Validators.required],
      account_number: ['HSP030709EA2', Validators.required],
      urban_reference: ['Clase de cuenta', Validators.required],
      billing_segment: ['Estratégicas', Validators.required],
      potencial_billing_amount: ['Más de $ 1,000,000.00', Validators.required],
      // segment: ['1', Validators.required],
      phone: ['55 7216 9827', Validators.required],
      website: ['elimm.com.mx', Validators.required],
      sector: ['Servicios', Validators.required],
      size: ['Corporativo -  más de 250', Validators.required],
      employees_amount: ['1000', Validators.required],
      isVip: [true, Validators.required],
      principal_contact: ['Alan 4G 4', Validators.required],
    });
  }

  public initAddressInformationForm(): void {
    this.addressInformationForm = this.fb.group({
      street: ['Av. San Jeronimo', Validators.required],
      number: [252, Validators.required],
      interior_number: ['', Validators.required],
      town: ['Tizapan San Angel', Validators.required],
      // map: ['', Validators.required],
      account_registration_type: ['Enlace', Validators.required],
      county: ['Coyoacan', Validators.required],
      city: ['Ciudad de Mexico', Validators.required],
      state: ['CDMX', Validators.required],
      cp: ['04519', Validators.required],
      employees_amount: [1000, Validators.required],
      geolocation: ['19.3340101,-99.1986951', Validators.required],
    });
  }

  public initSystemInformationForm(): void {
    this.systemInformationForm = this.fb.group({
      createdBy: ['Gabriela López Velázquez', Validators.required],
      creationDate: ['21-Nov-2021 / 12:15 pm', Validators.required],
      accountOwner: ['Gabriela López Velázquez', Validators.required],
      lastUpdatedBy: ['Gabriela López Velázquez', Validators.required],
      lastUpdatedDate: ['02-Dic-2021 / 18:50 pm', Validators.required],
      originCRM: ['Lorem Ipsum', Validators.required],
    });
  }
}
