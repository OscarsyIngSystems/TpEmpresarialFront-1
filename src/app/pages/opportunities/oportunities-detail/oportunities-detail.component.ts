import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { InfoDetail } from 'src/app/models/infoDetail';
import { Oportunity } from 'src/app/models/Oportunity';
import { OpportunitiesService } from 'src/app/services/opportunities/opportunities.service';

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
    reason: '',
    stage: '0',
    trybuy: false,
    whoIntegrated: 'one',
  };
  constructor(private _url: ActivatedRoute,private opService:OpportunitiesService,private spinner:NgxSpinnerService) {
    this.opportunityNumber = this._url.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.spinner.show();
    this.getDetail();
  }

  handdleEdit(event: boolean) {
    this.isEditing = event;
    if (event) {
      this.title = this.contentLabels + 'title-edit';
    } else {
      this.title = this.contentLabels + 'title-detail';
    }
  }

  getDetail():void{
    const id:string = this.opportunityNumber ? this.opportunityNumber : '0';
    this.opService.getOpportunitiesDetail(id)
    .subscribe(response=>{
      const detail = response[0];
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
          name: 'Número de oportunidad',
          value: detail.number,
        },
        {
          name: 'Etapa',
          value: detail.stage,
        },
        {
          name: 'Importe',
          value: `$${detail.amount}`,
        },
        {
          name: 'Fecha de cierre',
          value: detail.closeDate,
        },
        {
          name: 'Propietario de la cuenta',
          value: detail.owner,
        },
      ];
      this.spinner.hide();
    },
    err=>{
      this.spinner.hide();
    })
  }
}
