import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/shared/storage.service';

@Component({
  selector: 'app-connectivity',
  templateUrl: './connectivity.component.html',
  styleUrls: ['./connectivity.component.scss'],
})
export class ConnectivityComponent implements OnInit {
  isValid: boolean = false;
  isValidSelected: boolean = false;
  control: FormControl = new FormControl();
  columns: string[] = ['check', 'site'];
  filters: string[] = [];
  filteredData: any[] = [];
  originalData: any[] = [];

  dataSource = [
    {
      site: 'Audi Polanco',
    },
    {
      site: 'Audi Santa Fe',
    },
    {
      site: 'Audi Interlomas',
    },
    {
      site: 'Audi Lomas',
    },
    {
      site: 'Audi Polanco',
    },
    {
      site: 'Audi Santa Fe',
    },
    {
      site: 'Audi Interlomas',
    },
    {
      site: 'Audi Lomas',
    },
    {
      site: 'Audi Polanco',
    },
    {
      site: 'Audi Santa Fe',
    },
    {
      site: 'Audi Interlomas',
    },
    {
      site: 'Audi Lomas',
    },
  ];

  constructor(public stServices: StorageService) {
    stServices.setDataName(' / Cotización Audi 1');
  }

  ngOnInit(): void {}

  onFilter(filterValues: string): void {
    if (!this.filters.includes(filterValues)) {
      this.filters.push(filterValues);
    } else {
      const index = this.filters.indexOf(filterValues);
      this.filters.splice(index, 1);
    }
    if (this.filters.length === 0) {
      this.dataSource = this.originalData;
    } else {
      this.filteredData = this.originalData.filter((site) => {
        return this.filters.includes(site.accessMedia);
      });
      this.dataSource = this.filteredData;
    }
  }

  isValidStepper(event: boolean): void {
    console.log(event);
    this.isValid = event;
  }
}
