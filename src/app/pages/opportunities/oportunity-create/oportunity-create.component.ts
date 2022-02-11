import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { InfoDetail } from 'src/app/models/infoDetail';
import { OpportunitiesService } from 'src/app/services/opportunities/opportunities.service';
import { StorageService } from 'src/app/services/shared/storage.service';
import { DialogOportunitiesComponent } from '../dialogs/dialog-oportunities/dialog-oportunities.component';

@Component({
  selector: 'app-oportunity-create',
  templateUrl: './oportunity-create.component.html',
  styleUrls: ['./oportunity-create.component.scss'],
})
export class OportunityCreateComponent implements OnInit {
  infoDetail: Array<InfoDetail> = [];
  detail: any = [];
  constructor(
    private router: Router,
    private stService: StorageService,
    private opportunitiesService: OpportunitiesService,
    public dialog: MatDialog,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.getDetail();
  }

  getDetail(): void {
    this.detail = this.stService.getObjetSelected;
    console.log(this.detail);

    if (this.detail) {
      this.infoDetail = [
        {
          name: 'Nombre de la cuenta',
          value: this.detail.accountName,
        },
        {
          name: 'ID cliente único',
          value: this.detail.clientId,
        },
        {
          name: 'Folio cuenta',
          value: this.detail.accountId,
        },
        {
          name: 'RFC',
          value: this.detail.taxIdentification,
        },
        {
          name: 'Segmento',
          value: this.detail.segment,
        },
      ];
    } else {
      this.router.navigate(['/accounts']);
    }
  }

  createOpportunity(event: any) {
    console.log(event);
    let newOportunity = {
      accountId: this.detail.id,
      whoIntegratedId: event.whoIntegrated,
      name: event.oportunityName,
      description: event.description,
      origin: event.oportunityOrigin,
      stage: event.stage,
      closeDate: event.closeDate.getTime(),
      isTryAndBuy: event.trybuy,
      isMixedSale: false,
      isPartner: false,
      ...(event.trybuy && { tryAndBuyReason: event.reason }),
    };
    this.spinner.show();
    this.opportunitiesService.createOpportunity(newOportunity).subscribe(
      (response) => {
        console.log(response);
        this.spinner.hide();
        const dialogRef = this.dialog.open(DialogOportunitiesComponent, {
          width: '393px',
          height: '291px',
          data: { name: event.oportunityName, event },
        });
      },
      (error) => {
        this.spinner.hide();
        console.log(error);
      }
    );
    console.log(newOportunity);
  }
}
