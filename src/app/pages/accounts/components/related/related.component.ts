import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfoDetail } from 'src/app/models/infoDetail';

@Component({
  selector: 'app-related',
  templateUrl: './related.component.html',
  styleUrls: ['./related.component.scss'],
})
export class RelatedComponent implements OnInit {
  public contentLabels = 'accounts.';
  public accountId;

  infoDetail: Array<InfoDetail> = [
    {
      name: 'Nombre de la cuenta',
      value: 'Audi CDMX',
    },
    {
      name: 'ID Cliente único',
      value: '873827',
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

  columnsShow = [
    {
      key: 'name',
      columnName: this.contentLabels + 'table-related.colum2',
    },
    {
      key: 'opportunity_number',
      columnName: this.contentLabels + 'table-related.colum7',
    },
    {
      key: 'status',
      columnName: this.contentLabels + 'table-related.colum3',
    },
    {
      key: 'mounthTotal',
      columnName: this.contentLabels + 'table-related.colum4',
    },
    {
      key: 'closeDate',
      columnName: this.contentLabels + 'table-related.colum6',
    },
  ];
  public dataSource = [
    {
      name: 'Sitios Satelitales 7-Eleven',
      opportunity_number: '07307270',
      status: 'Necesidades',
      mounthTotal: '$1.00',
      closeDate: '31/12/2021',
    },
    {
      name: 'INT SIM 50/50 1 L OFICINA MERCADO 500',
      opportunity_number: '05941234',
      status: 'Firma',
      mounthTotal: '$417.64',
      closeDate: '30/12/2021',
    },
    {
      name: 'INTERNE SIM 20MB 2 TIENDAS / T2631 / T2632',
      opportunity_number: '07218229',
      status: 'Propuesta',
      mounthTotal: '$5,149.30',
      closeDate: '30/12/2021',
    },
    {
      name: 'T2724_Viñas - 50/50 1 Lin Voz',
      opportunity_number: '08395767',
      status: 'Perdida',
      mounthTotal: '$1.00',
      closeDate: '10/12/2021',
    },
    {
      name: 'Enlace de Internet OAT CDMX',
      opportunity_number: '08014191',
      status: 'Perdida',
      mounthTotal: '$20,350.00',
      closeDate: '30/10/2021',
    },
    {
      name: '38 Sitios Nona NL 7-Eleven Int 50/50 Mb 1 L',
      opportunity_number: '05429771',
      status: 'Ganada',
      mounthTotal: '$15,870.44',
      closeDate: '19/11/2020',
    },
    {
      name: 'Sitios Satelitales 7-Eleven',
      opportunity_number: '07307270',
      status: 'Necesidades',
      mounthTotal: '$1.00',
      closeDate: '31/12/2021',
    },
    {
      name: 'INT SIM 50/50 1 L OFICINA MERCADO 500',
      opportunity_number: '05941234',
      status: 'Firma',
      mounthTotal: '$417.64',
      closeDate: '30/12/2021',
    },
    {
      name: 'INTERNE SIM 20MB 2 TIENDAS / T2631 / T2632',
      opportunity_number: '07218229',
      status: 'Propuesta',
      mounthTotal: '$5,149.30',
      closeDate: '30/12/2021',
    },
    {
      name: 'T2724_Viñas - 50/50 1 Lin Voz',
      opportunity_number: '08395767',
      status: 'Perdida',
      mounthTotal: '$1.00',
      closeDate: '10/12/2021',
    },
    {
      name: 'Enlace de Internet OAT CDMX',
      opportunity_number: '08014191',
      status: 'Perdida',
      mounthTotal: '$20,350.00',
      closeDate: '30/10/2021',
    },
    {
      name: '38 Sitios Nona NL 7-Eleven Int 50/50 Mb 1 L',
      opportunity_number: '05429771',
      status: 'Ganada',
      mounthTotal: '$15,870.44',
      closeDate: '19/11/2020',
    },
  ];
  constructor(private _url: ActivatedRoute) {
    this.accountId = this._url.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {}
}
