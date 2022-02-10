import { DOCUMENT } from '@angular/common';
import {
  AfterContentInit,
  Component,
  ElementRef,
  Inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PageScrollService } from 'ngx-page-scroll-core';
import { NgxSpinnerService } from 'ngx-spinner';
import { InfoDetail } from 'src/app/models/infoDetail';
import { OpportunityRelated } from 'src/app/models/OpportunityRelated';
import { OpportunitiesService } from 'src/app/services/opportunities/opportunities.service';
import { StorageService } from 'src/app/services/shared/storage.service';

@Component({
  selector: 'app-related',
  templateUrl: './related.component.html',
  styleUrls: ['./related.component.scss'],
})
export class RelatedComponent implements OnInit, AfterContentInit {
  public contentLabels = 'accounts.';
  public accountId;
  public section;
  @ViewChild('bottom_tabs', { read: ElementRef, static: true })
  bottomTabs!: ElementRef;
  detail: any = [];
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
      columnName: this.contentLabels + 'table-related.colum5',
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
    {
      key: 'created',
      columnName: this.contentLabels + 'table-related.colum7',
    },
  ];
  public dataSource: OpportunityRelated[] = [];
  constructor(
    private _url: ActivatedRoute,
    private pageScrollService: PageScrollService,
    private stService: StorageService,
    private spinner: NgxSpinnerService,
    private servicesOpportunity: OpportunitiesService,
    private router: Router,
    @Inject(DOCUMENT) private document: any
  ) {
    this.accountId = this._url.snapshot.paramMap.get('id');
    this.section = this._url.snapshot.paramMap.get('section');
  }

  ngOnInit(): void {
    this.detail = this.stService.getObjetSelected;
    if (this.detail) {
      this.spinner.show();
      this.servicesOpportunity
        .getRelatedAccountsDetail(this.detail.id)
        .subscribe(
          (response) => {
            console.log(response);
            this.dataSource = response;
            this.spinner.hide();
          },
          (error) => {
            this.spinner.hide();
          }
        );
    } else {
      this.router.navigate(['/accounts']);
    }
  }

  ngAfterContentInit(): void {
    console.log(this.section);
    if (this.section) {
      this.pageScrollService.scroll({
        scrollTarget: this.bottomTabs.nativeElement,
        document: this.document,
      });
    }
  }
}
