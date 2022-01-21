import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Account } from 'src/app/models/account';
import { AccountsService } from 'src/app/services/accounts/accounts.service';


@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrls: ['./accounts-list.component.scss'],
})
export class AccountsListComponent implements OnInit {
  public contentLabels = 'accounts.acounts-list.';

  dataSource:Array<Account> = [];

  columnsShow = [
    {
      key: 'id',
      columnName: this.contentLabels + 'table.colum2',
    },
    {
      key: 'accountName',
      columnName: this.contentLabels + 'table.colum3',
    },
    {
      key: 'accountId',
      columnName: this.contentLabels + 'table.colum4',
    },
    {
      key: 'identification',
      columnName: this.contentLabels + 'table.colum5',
    },
    {
      key: 'segment',
      columnName: this.contentLabels + 'table.colum6',
    },
    {
      key: 'phone',
      columnName: this.contentLabels + 'table.colum7',
    },
    {
      key: 'contact',
      columnName: this.contentLabels + 'table.colum8',
    },
    {
      key: 'created',
      columnName: this.contentLabels + 'table.colum9',
    },
  ];

  constructor(private accountService:AccountsService, private spinner:NgxSpinnerService) {

  }

  ngOnInit(): void {
    this.spinner.show();
    this.getAccounts()
  }

  private getAccounts(){
    this.accountService.getAccounts()
    .subscribe(response=>{
      this.dataSource=response;
      this.spinner.hide();
    },err=>{
      this.spinner.hide();
    })
  }
}
