import { Observable } from 'rxjs';
import { Sale } from './../../../../../models/sale';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-edit-load-sites',
  templateUrl: './dialog-edit-load-sites.component.html',
  styleUrls: ['./dialog-edit-load-sites.component.scss']
})
export class DialogEditLoadSitesComponent implements OnInit {
  searchData = new FormControl();
  editDataForm!: FormGroup;
  filteredOptions: Observable<Sale[]> | undefined;
  selectedIdOption = 0;
  constructor(public form: FormBuilder) {
    this.buildForm();
  }

  ngOnInit(): void {

  }

  public buildForm() {
    this.editDataForm = this.form.group({
      siteName: ['Audi Pedregal',Validators.required],
      street: ['Joaquín',Validators.required],
      outsideNumber: ['MZ80',Validators.required],
      insideNumber: ['7735',Validators.required],
      zipCode: ['10400',Validators.required]
    })
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
