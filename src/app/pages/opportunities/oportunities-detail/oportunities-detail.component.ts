import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfoDetail } from 'src/app/models/infoDetail';
import { Oportunity } from 'src/app/models/Oportunity';

@Component({
  selector: 'app-oportunities-detail',
  templateUrl: './oportunities-detail.component.html',
  styleUrls: ['./oportunities-detail.component.scss'],
})
export class OportunitiesDetailComponent implements OnInit {
  public contentLabels = 'oportunities.';
  public opportunityNumber;
  isEditing: boolean = false;

  title: string = this.contentLabels + 'title-detail';

  infoDetail: Array<InfoDetail> = [
    {
      name: 'Nombre de la cuenta',
      value: 'Audi CDMX',
    },
    {
      name: 'ID cliente único',
      value: '5545455',
    },
    {
      name: 'Número de oportunidad',
      value: '00022445',
    },
    {
      name: 'Etapa',
      value: 'Necesidades',
    },
    {
      name: 'Importe',
      value: '$200',
    },
    {
      name: 'Fecha de cierre',
      value: '31/08/2022',
    },
    {
      name: 'Propietario de la cuenta',
      value: 'Sergio Aparicio Contreras',
    },
  ];

  oportunity: Oportunity = {
    accountName: 'Audi CDMX',
    amount: '$200',
    badge: 'MXN - Peso Mexicano',
    closeDate: new Date(),
    description: 'Esto es una descripción',
    executive: 'Nombre del ejecutivo',
    oportunityName: 'Audi CDMX Op',
    probability: '10%',
    oportunityOrigin: 'one',
    reason: '0',
    stage: '0',
    trybuy: false,
    whoIntegrated: 'one',
  };
  constructor(private _url: ActivatedRoute) {
    this.opportunityNumber = this._url.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {}

  handdleEdit(event: boolean) {
    this.isEditing = event;
    if (event) {
      this.title = this.contentLabels + 'title-edit';
    } else {
      this.title = this.contentLabels + 'title-detail';
    }
  }
}
