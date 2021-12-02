import { Component, OnInit } from '@angular/core';
import { ChartComponentOptions } from 'src/app/models/ChartOptions';
import { DialogMassiveLoadSitesComponent } from '../dialog-massive-load-sites/dialog-massive-load-sites.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-oportunities',
  templateUrl: './oportunities.component.html',
  styleUrls: ['./oportunities.component.scss'],
})
export class OportunitiesComponent implements OnInit {
  public contentLabels = 'accounts.accounts-dashboard.';
  chartProps: ChartComponentOptions = {
    data: [3, 5, 1, 1, 1, 1],
    colors: ['#7E84D0', '#0595FF', '#5E5A6A', '#7ED1CA', '#93C2CE', '#E5AB4E'],
    labels: [
      'Necesidades',
      'Disenio',
      'Propuesta',
      'Firma',
      'Credito',
      'Ganada',
    ],
    chartType: 'doughnut',
    width: 150,
    height: 150,
    class: 'chart-container shadow',
  };
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    const dialogRef = this.dialog.open(DialogMassiveLoadSitesComponent, {
      width: '452px',
      height: '355px',
    });
  }
}
