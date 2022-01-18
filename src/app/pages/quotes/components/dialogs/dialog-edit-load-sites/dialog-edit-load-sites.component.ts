import { Observable } from 'rxjs';
import { Sale } from './../../../../../models/sale';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-edit-load-sites',
  templateUrl: './dialog-edit-load-sites.component.html',
  styleUrls: ['./dialog-edit-load-sites.component.scss']
})
export class DialogEditLoadSitesComponent implements OnInit {
  searchData = new FormControl();
  filteredOptions: Observable<Sale[]> | undefined;
  selectedIdOption = 0;
  constructor() { }

  ngOnInit(): void {
  }

  public search(): void {
    alert('Buscando... ' + this.searchData.value);
  }

  public clearSearch(): void {
    this.selectedIdOption = 0;
    this.searchData.setValue('');
  }

  public setSearchId(id: number): void {
    this.selectedIdOption = id;
  }

}
