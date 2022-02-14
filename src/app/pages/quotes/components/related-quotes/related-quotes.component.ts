import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IFile } from 'src/app/models/IFile';
import { InfoDetail } from 'src/app/models/infoDetail';
import { StorageService } from 'src/app/services/shared/storage.service';

@Component({
  selector: 'app-related-quotes',
  templateUrl: './related-quotes.component.html',
  styleUrls: ['./related-quotes.component.scss'],
})
export class RelatedQuotesComponent implements OnInit {
  public contentLabels = 'oportunities.';
  files: Array<File> = [];
  detail:any;
  filesInfo: Array<IFile> = [];
  infoDetail: Array<InfoDetail> = [
   
  ];

  columnsShow = [
    {
      key: 'siteFolio',
      columnName: 'Folio del sitio',
    },
    {
      key: 'street',
      columnName: 'calle',
    },
    {
      key: 'colony',
      columnName: 'Colonia',
    },
    {
      key: 'delegation',
      columnName: 'Delegación/Municipio',
    },
    {
      key: 'city',
      columnName: 'Ciudad',
    },
    {
      key: 'state',
      columnName: 'Estado',
    },
    {
      key: 'cp',
      columnName: 'C.P.',
    },
  ];
  public dataSource = [
    {
      siteFolio: 'SIT-3661691',
      street: 'Avenida San Jerónimo',
      colony: 'La Otra Banda',
      delegation: 'Gustavo A. Madero',
      city: 'Ciudad de México',
      state: 'Estado de México',
      cp: '07089',
    },
    {
      siteFolio: 'SIT-3661691',
      street: 'Avenida San Jerónimo',
      colony: 'La Otra Banda',
      delegation: 'Gustavo A. Madero',
      city: 'Ciudad de México',
      state: 'Estado de México',
      cp: '07089',
    },
    {
      siteFolio: 'SIT-3661691',
      street: 'Avenida San Jerónimo',
      colony: 'La Otra Banda',
      delegation: 'Gustavo A. Madero',
      city: 'Ciudad de México',
      state: 'Estado de México',
      cp: '07089',
    },
    {
      siteFolio: 'SIT-3661691',
      street: 'Avenida San Jerónimo',
      colony: 'La Otra Banda',
      delegation: 'Gustavo A. Madero',
      city: 'Ciudad de México',
      state: 'Estado de México',
      cp: '07089',
    },
    {
      siteFolio: 'SIT-3661691',
      street: 'Avenida San Jerónimo',
      colony: 'La Otra Banda',
      delegation: 'Gustavo A. Madero',
      city: 'Ciudad de México',
      state: 'Estado de México',
      cp: '07089',
    },
    {
      siteFolio: 'SIT-3661691',
      street: 'Avenida San Jerónimo',
      colony: 'La Otra Banda',
      delegation: 'Gustavo A. Madero',
      city: 'Ciudad de México',
      state: 'Estado de México',
      cp: '07089',
    },
    {
      siteFolio: 'SIT-3661691',
      street: 'Avenida San Jerónimo',
      colony: 'La Otra Banda',
      delegation: 'Gustavo A. Madero',
      city: 'Ciudad de México',
      state: 'Estado de México',
      cp: '07089',
    },
    {
      siteFolio: 'SIT-3661691',
      street: 'Avenida San Jerónimo',
      colony: 'La Otra Banda',
      delegation: 'Gustavo A. Madero',
      city: 'Ciudad de México',
      state: 'Estado de México',
      cp: '07089',
    },
    {
      siteFolio: 'SIT-3661691',
      street: 'Avenida San Jerónimo',
      colony: 'La Otra Banda',
      delegation: 'Gustavo A. Madero',
      city: 'Ciudad de México',
      state: 'Estado de México',
      cp: '07089',
    },
    {
      siteFolio: 'SIT-3661691',
      street: 'Avenida San Jerónimo',
      colony: 'La Otra Banda',
      delegation: 'Gustavo A. Madero',
      city: 'Ciudad de México',
      state: 'Estado de México',
      cp: '07089',
    },
    {
      siteFolio: 'SIT-3661691',
      street: 'Avenida San Jerónimo',
      colony: 'La Otra Banda',
      delegation: 'Gustavo A. Madero',
      city: 'Ciudad de México',
      state: 'Estado de México',
      cp: '07089',
    },
    {
      siteFolio: 'SIT-3661691',
      street: 'Avenida San Jerónimo',
      colony: 'La Otra Banda',
      delegation: 'Gustavo A. Madero',
      city: 'Ciudad de México',
      state: 'Estado de México',
      cp: '07089',
    },
    {
      siteFolio: 'SIT-3661691',
      street: 'Avenida San Jerónimo',
      colony: 'La Otra Banda',
      delegation: 'Gustavo A. Madero',
      city: 'Ciudad de México',
      state: 'Estado de México',
      cp: '07089',
    },
    {
      siteFolio: 'SIT-3661691',
      street: 'Avenida San Jerónimo',
      colony: 'La Otra Banda',
      delegation: 'Gustavo A. Madero',
      city: 'Ciudad de México',
      state: 'Estado de México',
      cp: '07089',
    },
  ];

  displayedColumns: string[] = [
    'name',
    'range',
    'email',
    'phone',
    'type',
    'principal',
  ];
  dataSourceContacts = [
    {
      name: 'Oscar Serrano',
      range: 'Cuentas',
      email: 'mail@email.com',
      phone: '5567212132',
      type: 'Proveedores',
      principal: false,
    },
    {
      name: 'Alan Pérez',
      range: 'Ventas',
      email: 'mail@email.com',
      phone: '5567212132',
      type: 'Directo',
      principal: true,
    },
    {
      name: 'Manuel Ramirez',
      range: 'Finanzas',
      email: 'mail@email.com',
      phone: '5567212132',
      type: 'Personal',
      principal: false,
    },
    {
      name: 'Raúl Fuentes',
      range: 'Product Owner',
      email: 'mail@email.com',
      phone: '5567212132',
      type: 'Privado',
      principal: false,
    },
    {
      name: 'Iván Morales',
      range: 'Innovación',
      email: 'mail@email.com',
      phone: '5567212132',
      type: 'Directo',
      principal: false,
    },
    {
      name: 'Carlos Sánchez',
      range: 'Desarrollo',
      email: 'mail@email.com',
      phone: '5567212132',
      type: 'Privado',
      principal: false,
    },
    {
      name: 'Laura Martha González',
      range: 'Seguridad',
      email: 'mail@email.com',
      phone: '5567212132',
      type: 'Personal',
      principal: false,
    },
  ];

  displayedColumnsActivities: string[] = [
    'subject',
    'name',
    'related',
    'expiration',
    'assignedTo',
  ];
  dataSourceActivities = [
    {
      subject: 'Meet - Seguimiento a la cuenta',
      name: 'Jesús Camacho Fernando ',
      related: 'Audi CDMX S.A. de C.V. ',
      expiration: '19-Nov-2022',
      assignedTo: 'Elizabeth Reynoso Cuevas',
    },
    {
      subject: 'Llamada de seguimiento',
      name: 'Jesús Camacho Fernando ',
      related: 'Audi CDMX S.A. de C.V. ',
      expiration: '16-Nov-2022',
      assignedTo: 'Ana Lilia Rodriguez Malfavon',
    },
  ];

  displayedColumnsAccounts: string[] = ['name', 'brm', 'saleId', 'address'];
  dataSourceAccounts = [
    {
      name: 'Audi México, S.A. de C.V.',
      brm: '0200476666',
      saleId: 'Lorem Ipsum',
      address: 'Boulevard Q5 No. 1',
    },
    {
      name: 'Audi México, S.A. de C.V.',
      brm: '0200395814',
      saleId: 'Lorem Ipsum',
      address: 'Boulevard Q5 No. 1',
    },
    {
      name: 'Audi México, S.A. de C.V.',
      brm: '0200431091',
      saleId: 'Lorem Ipsum',
      address: 'Av. Presidente Masaryk Esq, Galileo 66',
    },
    {
      name: 'Audi México, S.A. de C.V.',
      brm: '0200440400',
      saleId: 'Lorem Ipsum',
      address: 'Juan Salvador Agraz 60',
    },
    {
      name: 'Audi México, S.A. de C.V.',
      brm: '0200228177',
      saleId: 'Lorem Ipsum',
      address: 'Boulevard Q5 No. 1',
    },
  ];

  dataFiles: { columnsShow: string[]; dataSource: IFile[] } = {
    columnsShow: ['title', 'lastUpdatedDate', 'size', 'action'],
    dataSource: [],
  };

  handdleFile(files: Array<File>) {
    this.files = [...files];
    this.addFiles();
  }

  handdleTableFile(file: File) {
    this.files.push(file);
    this.addFiles();
  }

  private addFiles() {
    this.filesInfo = [];
    this.files.forEach((file: any) => {
      this.filesInfo.push({
        lastUpdatedDate: file.lastModifiedDate,
        size: file.size,
        title: file.name,
      });
    });

    this.dataFiles.dataSource = this.filesInfo;
  }

  constructor(private stService:StorageService,private router:Router) {}



  ngOnInit(): void {
    this.detail = this.stService.getObjetSelected;

    if(this.detail){
        this.infoDetail = [
      {
        name: 'Nombre de la cuenta',
        value: this.detail.opportunity.accountName,
      },
      {
        name: 'Número de oportunidad',
        value: this.detail.opportunity.number,
      },
      {
        name: 'Etapa oportunidad',
        value: this.detail.opportunity.stage,
      },
      {
        name: 'Importe',
        value: this.detail.opportunity.amount,
      },
      {
        name: 'Fecha de cierre',
        value: this.detail.opportunity.closeDate,
      },
      {
        name: 'Vigencia cotización',
        value: this.detail.validity,
      },
      {
        name: 'Propietario de la cuenta',
        value: this.detail.opportunity.owner,
      },
    ]; 
    }
    else{
      this.router.navigate(['/quotes'])
    }
 

  }
}
