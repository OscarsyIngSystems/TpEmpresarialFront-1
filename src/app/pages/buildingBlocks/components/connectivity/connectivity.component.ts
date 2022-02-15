import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
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
  columns: string[] = ['check', 'site', 'subtype'];

  data = [
    {
      site: 'Audi Polanco Fibra',
      type: 'Fibra',
      subtype: 'Metro',
    },
    {
      site: 'Audi Polanco Fibra',
      type: 'Fibra',
      subtype: 'GPON',
    },
    {
      site: 'Audi Polanco M',
      type: 'Microonda',
      subtype: 'PMP',
    },
    {
      site: 'Audi Polanco M',
      type: 'Microonda',
      subtype: 'PTP',
    },
    {
      site: 'Audi Polanco Fibra',
      type: 'Fibra',
      subtype: 'Metro',
    },
    {
      site: 'Audi Polanco Fibra',
      type: 'Fibra',
      subtype: 'GPON',
    },
    {
      site: 'Audi Polanco M',
      type: 'Microonda',
      subtype: 'PMP',
    },
    {
      site: 'Audi Polanco M',
      type: 'Microonda',
      subtype: 'PTP',
    },
    {
      site: 'Audi Polanco fo/wm',
      type: 'FM',
      subtype: 'PTP',
    },
    {
      site: 'Audi Polanco fo/wm',
      type: 'FM',
      subtype: 'PTP',
    },
    {
      site: 'Audi Polanco fo/wm',
      type: 'FM',
      subtype: 'PTP',
    },
  ];

  constructor(public stServices: StorageService) {
    stServices.setDataName(' / Cotización Audi 1');
  }

  ngOnInit(): void {}

  isValidStepper(event: boolean): void {
    this.isValid = event;
  }
}
