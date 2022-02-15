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
  infoDetail: Array<InfoDetail> = [];

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
      this.infoDetail = [
        {
          name: 'Nombre de la cuenta',
          value: this.detail.accountName,
        },
        {
          name: 'ID Cliente único',
          value: this.detail.clientId,
        },
        {
          name: 'Folio Cuenta',
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
      this.spinner.show();
      this.servicesOpportunity
        .getRelatedAccountsDetail(this.detail.id)
        .subscribe(
          (response) => {
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
    if (this.section) {
      this.pageScrollService.scroll({
        scrollTarget: this.bottomTabs.nativeElement,
        document: this.document,
      });
    }
  }
}
