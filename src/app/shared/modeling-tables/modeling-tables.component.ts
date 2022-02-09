import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  ChangeDetectionStrategy,
} from '@angular/core';
@Component({
  selector: 'app-modeling-tables',
  templateUrl: './modeling-tables.component.html',
  styleUrls: ['./modeling-tables.component.scss'],
})
export class ModelingTablesComponent implements OnInit {
  @Input() columns: any[] = [];
  @Input() dataSource: any[] = [];
  @Input() idTableShow: number = 0; //indicador de que tabla se muestra

  constructor() {}

  ngOnInit(): void {}
}
