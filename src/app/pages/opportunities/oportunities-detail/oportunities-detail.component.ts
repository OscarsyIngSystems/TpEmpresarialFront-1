import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { InfoDetail } from 'src/app/models/infoDetail';
import { Oportunity } from 'src/app/models/Oportunity';
import { OpportunitiesService } from 'src/app/services/opportunities/opportunities.service';
import { StorageService } from 'src/app/services/shared/storage.service';

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

  oportunity!: Oportunity;
  constructor(
    private _url: ActivatedRoute,
    private router:Router,
    private spinner:NgxSpinnerService,
    private stService:StorageService) {
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

      const detail:any = this.stService.getObjetSelected;
      if(detail){
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
          value: detail.executive,
        },
      ];

      const date = detail.closeDate.split('/')
      
      this.oportunity = {
        accountName: 'Audi CDMX',
        amount: `$${detail.amount}`,
        badge: 'MXN - Peso Mexicano',
        closeDate: new Date(date[2], date[1] - 1, date[0]),
        description: detail.description,
        executive: detail.executive,
        oportunityName: detail.name,
        probability: detail.probability + '%',
        oportunityOrigin: 'one',
        reason: detail.tryAndBuyReason,
        stage: '0',
        trybuy: detail.isTryAndBuy == 'true',
        whoIntegrated: 'one',
        isMixedSale: detail.isMixedSale,
        isParter: detail.isParter,
      };
      }
      else{
        this.router.navigate(['/opportunities'])
      }

      this.spinner.hide();
   
  }
}
