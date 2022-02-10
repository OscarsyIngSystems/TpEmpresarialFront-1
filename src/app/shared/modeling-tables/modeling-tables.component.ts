import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { SelectionModel } from '@angular/cdk/collections';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  ChangeDetectionStrategy,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-modeling-tables',
  templateUrl: './modeling-tables.component.html',
  styleUrls: ['./modeling-tables.component.scss'],
})
export class ModelingTablesComponent implements OnInit {
  @Input() columns: any[] = [];
  @Input() data: any = [];
  @Input() idTableShow: number = 0; //indicador de que tabla se muestra
  @Input() showCheckboxes: boolean = false;
  filters: string[] = [];
  filteredData: any[] = [];
  originalData: any[] = [];
  dataSource!: MatTableDataSource<any>;
  selection = new SelectionModel<any>(true, []);

  // control: FormControl = new FormControl();
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      control: [''],
    });
  }

  ngOnInit(): void {
    this.originalData = this.data;
    this.dataSource = new MatTableDataSource<any>(this.data);
  }

  resetFilters(): void {
    this.filters = [];
    this.filteredData = [];

    // this.control.reset();
    // this.control.setValue('4');
  }

  /* Recibe un valor para filtrar, busca si no existe el valor en el listado de filtros */
  onFilter(filterValues: string[]): void {
    console.log(this.form.get('control')?.value);
    //this.form.get('control')?.setValue('4');
    console.log(this.form.get('control')?.value);
    filterValues.forEach((item) => {
      if (item == 'todos') {
        this.resetFilters();
        this.dataSource = new MatTableDataSource<any>(this.originalData);
      } else {
        this.resetFilters();
        //recorre los valores que estamos buscando
        if (!this.filters.includes(item)) {
          //si no existe el valor en el listado de filtros
          this.filters.push(item); //agrega el valor al listado
        } else {
          const index = this.filters.indexOf(item); //obtiene el indice del valor buscado
          this.filters.splice(index, 1); //remueve el elemeto del listado segun el indice obtenido
        }
        if (this.filters.length === 0) {
          //si no tiene elementos el listado
          this.data = this.originalData; //vuelve al listado de todos los registros de la tabla
        } else {
          this.filteredData = this.originalData.filter((item) => {
            return this.filters.includes(item.type);
          });
          this.data = this.filteredData;
        }
        this.dataSource = new MatTableDataSource<any>(this.data);
      }
    });
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.position + 1
    }`;
  }
}
