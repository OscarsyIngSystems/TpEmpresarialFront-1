import { Component, OnInit } from '@angular/core';
import { InfoDetail } from 'src/app/models/infoDetail';
import { Oportunity } from 'src/app/models/Oportunity';

@Component({
  selector: 'app-oportunities-detail',
  templateUrl: './oportunities-detail.component.html',
  styleUrls: ['./oportunities-detail.component.scss'],
})
export class OportunitiesDetailComponent implements OnInit {
  public contentLabels = 'oportunities.';
  infoDetail: Array<InfoDetail> = [
    {
      name: 'Nombre de la cuenta',
      value: 'Audi CDMX',
    },
    {
      name: 'ID cliente unico',
      value: '5545455',
    },
    {
      name: 'Numero de oportunidad',
      value: '00022445',
    },
    {
      name: 'Etapa',
      value: 'Necesidades',
    },
    {
      name: 'Importe',
      value: 'Estrategicas',
    },
    {
      name: 'Fecha de cierre',
      value: '31/08/2021',
    },
    {
      name: 'Propietario de la cuenta',
      value: 'Sergio Aparicio Contreras',
    },
  ];

  oportunity: Oportunity = {
    accountName: 'Audi CDMX',
    amount: 200,
    badge: 'Necesidades',
    closeDate: new Date(),
    description: 'Esto es una descripcion',
    executive: 'Nombre del ejecutivo',
    oportunityName: 'Audi CDMX Op',
    probability: '10%',
    oportunityOrigin: '',
    reason: 'Superioridad tecnica',
    stage: 'Necesidades',
    trybuy: true,
    whoIntegrated: 'Sergio Aragon',
  };
  constructor() {}

  ngOnInit(): void {}
}
