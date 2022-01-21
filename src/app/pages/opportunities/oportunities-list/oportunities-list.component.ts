import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { InfoDetail } from 'src/app/models/infoDetail';
import { OpportunitiesService } from 'src/app/services/opportunities/opportunities.service';

@Component({
  selector: 'app-oportunities-list',
  templateUrl: './oportunities-list.component.html',
  styleUrls: ['./oportunities-list.component.scss'],
})
export class OportunitiesListComponent implements OnInit {
  public contentLabels = 'oportunities.';
  filterParam: FormControl = new FormControl('1');
  lastValue!: number;

  infoDetail: Array<InfoDetail> = [
    {
      name: 'Nombre de la cuenta',
      value: 'Audi CDMX',
    },
    {
      name: 'ID',
      value: '9898987',
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
      key: 'oportunityName',
      columnName: this.contentLabels + 'table.colum2',
    },
    {
      key: 'oportunityNumber',
      columnName: this.contentLabels + 'table.colum3',
    },
    {
      key: 'accountName',
      columnName: this.contentLabels + 'table.colum4',
    },
    {
      key: 'stage',
      columnName: this.contentLabels + 'table.colum5',
    },
    {
      key: 'amount',
      columnName: this.contentLabels + 'table.colum6',
    },
    {
      key: 'createdAt',
      columnName: this.contentLabels + 'table.colum7',
    },
    {
      key: 'validity',
      columnName: this.contentLabels + 'table.colum8',
    },
  ];
  public dataSource: any[] = [];
  constructor(
    private opService: OpportunitiesService,
    private spinner: NgxSpinnerService
  ) {
    this.lastValue = this.filterParam.value;
  }

  doFilter(event: any) {
    if (this.lastValue !== event.target.value) {
      this.lastValue = event.target.value;
    } else {
      this.filterParam.setValue(0);
      this.lastValue = 0;
    }
  }

  ngOnInit(): void {
    this.spinner.show();
    this.getOpportunities();
  }

  getOpportunities(): void {
    this.opService.getOpportunities().subscribe(
      (res) => {
        this.dataSource = res;
        this.spinner.hide();
      },
      (err) => {
        this.spinner.hide();
      }
    );
  }
}
