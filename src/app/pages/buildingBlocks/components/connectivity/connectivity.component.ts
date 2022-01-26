import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/shared/storage.service';

@Component({
  selector: 'app-connectivity',
  templateUrl: './connectivity.component.html',
  styleUrls: ['./connectivity.component.scss'],
})
export class ConnectivityComponent implements OnInit {
  button: FormControl = new FormControl('', Validators.required);

  constructor(public stServices: StorageService) {
    stServices.setDataName(' / Cotización Audi 1');
  }

  ngOnInit(): void {}
}
