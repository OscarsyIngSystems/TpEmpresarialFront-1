import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { STAGES } from 'src/app/constants/constants';
import { InfoDetail } from 'src/app/models/infoDetail';
import { OpportunitiesService } from 'src/app/services/opportunities/opportunities.service';

@Component({
  selector: 'app-oportunities-list',
  templateUrl: './oportunities-list.component.html',
  styleUrls: ['./oportunities-list.component.scss'],
})
export class OportunitiesListComponent implements OnInit {
  public contentLabels = 'oportunities.';
  filterParam: FormControl = new FormControl('0');
  lastValue!: number;
  filters: string[] = [];
  filteredData: any[] = [];
  originalData: any[] = [];
  stages = STAGES;

  infoDetail: Array<InfoDetail> = [
    {
      name: 'Nombre de la cuenta',
      value: 'Audi CDMX',
    },
    {
      name: 'ID',
      value: '9898987',
    },
    {
      name: 'Folio Cuenta',
      value: 'CRM-00022445',
    },
    {
      name: 'RFC',
      value: 'HSP030709EA2',
    },
    {
      name: 'Segmento',
      value: 'I',
    },
  ];

  columnsShow = [
    {
      key: 'oportunityName',
      columnName: this.contentLabels + 'table.colum2',
    },
    {
      key: 'oportunityNumber',
      columnName: this.contentLabels + 'table.colum3',
    },
    {
      key: 'accountName',
      columnName: this.contentLabels + 'table.colum4',
    },
    {
      key: 'stage',
      columnName: this.contentLabels + 'table.colum5',
    },
    {
      key: 'amount',
      columnName: this.contentLabels + 'table.colum6',
    },
    {
      key: 'createdAt',
      columnName: this.contentLabels + 'table.colum7',
    },
    {
      key: 'validity',
      columnName: this.contentLabels + 'table.colum8',
    },
  ];
  public dataSource: any[] = [];
  constructor(
    private opService: OpportunitiesService,
    private spinner: NgxSpinnerService
  ) {
    this.lastValue = this.filterParam.value;
  }

  doFilter(event: any) {
   this.spinner.show();
    if (this.lastValue !== event.target.id) {
      this.lastValue = event.target.id;
       this.onFilter(event.target.id);
    } else {
      this.filterParam.setValue(0);
      this.lastValue = 0;
      this.dataSource = [];
      setTimeout(() => {
        this.dataSource = this.originalData;
        this.spinner.hide();
      }, 10);
           
   
    }
    
  }

private onFilter(filterValues: string): void {
  this.spinner.show();
        this.resetFilters();
        //recorre los valores que estamos buscando
        if (!this.filters.includes(filterValues)) {
          //si no existe el valor en el listado de filtros
           this.dataSource = []; 
          this.filters.push(filterValues); //agrega el valor al listado
        } else {
          const index = this.filters.indexOf(filterValues); //obtiene el indice del valor buscado
          this.filters.splice(index, 1); //remueve el elemeto del listado segun el indice obtenido
        }
        if (this.filters.length === 0) {
          //si no tiene elementos el listado
          this.dataSource = this.originalData; //vuelve al listado de todos los registros de la tabla
        } else {
          this.filteredData = this.originalData.filter((item) => {
            return this.filters.includes(item.stage);
          });
this.dataSource = [];
          setTimeout(()=>{
            this.dataSource = this.filteredData;
            this.spinner.hide();
          },10)
           
          
        }
        // this.dataSource = (this.data);
      
    
  }

  resetFilters(): void {
    this.filters = [];
    this.filteredData = [];
    this.dataSource = []
    // this.control.reset();
    // this.control.setValue('4');
  }

  ngOnInit(): void {
    this.spinner.show();
    this.getOpportunities();
  }

  getOpportunities(): void {
    this.opService.getOpportunities().subscribe(
      (res) => {
        this.dataSource = res;
        console.log(this.dataSource);
        this.originalData = res;
        this.spinner.hide();
      },
      (err) => {
        this.spinner.hide();
      }
    );
  }
}
