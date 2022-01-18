import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { InfoDetail } from 'src/app/models/infoDetail';

@Component({
  selector: 'app-quotes-create',
  templateUrl: './quotes-create.component.html',
  styleUrls: ['./quotes-create.component.scss'],
})
export class QuotesCreateComponent implements OnInit {
  infoDetail: Array<InfoDetail> = [
    {
      name: 'Número de oportunidad',
      value: '678676',
    },

    {
      name: 'Etapa',
      value: 'Necesidades',
    },
    {
      name: 'Importe',
      value: '$1,290,800',
    },
    {
      name: 'Fecha estimada de cierre',
      value: '10/10/2022',
    },

    {
      name: 'Propietario de la cuenta',
      value: 'Sergio Aparicio Contreras',
    },
  ];

  data: any;
  constructor(private activatedRoute: ActivatedRoute) {
    this.getData();
  }

  getData() {
    let state = this.activatedRoute.paramMap.pipe(
      map(() => window.history.state)
    );

    state.subscribe((data: any) => {
      this.data = data;
      console.log(data.data);
    });
  }
  ngOnInit(): void {}
}
