import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IFile } from 'src/app/models/IFile';
import { InfoDetail } from 'src/app/models/infoDetail';
import { TeamComponent } from '../dialogs/team/team.component';

@Component({
  selector: 'app-related-oportunities',
  templateUrl: './related-oportunities.component.html',
  styleUrls: ['./related-oportunities.component.scss'],
})
export class RelatedOportunitiesComponent implements OnInit {
  public contentLabels = 'oportunities.';
  files: Array<File> = [];
  filesInfo: Array<IFile> = [];

  infoDetail: Array<InfoDetail> = [
    {
      name: 'Nombre de la cuenta',
      value: 'Audi CDMX',
    },
    {
      name: 'Número de la oportunidad',
      value: '9898987',
    },
    {
      name: 'Etapa',
      value: 'Necesidades',
    },
    {
      name: 'Importe',
      value: 'Estratégicas',
    },
    {
      name: 'Fecha de cierre',
      value: '21/12/2022',
    },
    {
      name: 'Propietario de la cuenta',
      value: 'Sergio aparicio contreras',
    },
  ];

  columnsShow = [
    {
      key: 'quoteName',
      columnName: this.contentLabels + 'table-related.colum2',
    },
    {
      key: 'invoice',
      columnName: this.contentLabels + 'table-related.colum3',
    },
    {
      key: 'mounthTotal',
      columnName: this.contentLabels + 'table-related.colum4',
    },
    {
      key: 'status',
      columnName: this.contentLabels + 'table-related.colum5',
    },
    {
      key: 'validity',
      columnName: this.contentLabels + 'table-related.colum6',
    },
    {
      key: 'mainCot',
      columnName: this.contentLabels + 'table-related.colum7',
    },
  ];
  public dataSource = [
    {
      quoteName: 'Audi-CDMX-Cot',
      invoice: 'COT3754545',
      mounthTotal: '$2225.21 MXN',
      status: 'Borrador',
      validity: '19/12/2022',
      mainCot: true,
    },
    {
      quoteName: 'Audi-CDMX-Cot',
      invoice: 'COT3754545',
      mounthTotal: '$2225.21 MXN',
      status: 'Borrador',
      validity: '19/12/2022',
      mainCot: false,
    },
    {
      quoteName: 'Audi-CDMX-Cot',
      invoice: 'COT3754545',
      mounthTotal: '$2225.21 MXN',
      status: 'Borrador',
      validity: '19/12/2022',
      mainCot: false,
    },
    {
      quoteName: 'Audi-CDMX-Cot',
      invoice: 'COT3754545',
      mounthTotal: '$2225.21 MXN',
      status: 'Borrador',
      validity: '19/12/2022',
      mainCot: false,
    },
    {
      quoteName: 'Audi-CDMX-Cot',
      invoice: 'COT3754545',
      mounthTotal: '$2225.21 MXN',
      status: 'Borrador',
      validity: '19/12/2022',
      mainCot: false,
    },
    {
      quoteName: 'Audi-CDMX-Cot',
      invoice: 'COT3754545',
      mounthTotal: '$2225.21 MXN',
      status: 'Borrador',
      validity: '19/12/2022',
      mainCot: false,
    },
    {
      quoteName: 'Audi-CDMX-Cot',
      invoice: 'COT3754545',
      mounthTotal: '$2225.21 MXN',
      status: 'Borrador',
      validity: '19/12/2022',
      mainCot: false,
    },
  ];

  dataContacts = {
    displayedColumns: ['name', 'range', 'email', 'phone', 'type', 'principal'],
    columnsShow: [
      {
        key: 'quoteName',
        columnName: this.contentLabels + 'table-contacts.colum2',
      },
      {
        key: 'invoice',
        columnName: this.contentLabels + 'table-contacts.colum3',
      },
      {
        key: 'mounthTotal',
        columnName: this.contentLabels + 'table-contacts.colum4',
      },
      {
        key: 'status',
        columnName: this.contentLabels + 'table-contacts.colum5',
      },
      {
        key: 'validity',
        columnName: this.contentLabels + 'table-contacts.colum6',
      },
    ],
    dataSource: [
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
    ],
  };

  dataPartner = {
    columnsShow: [
      {
        key: 'user',
        columName: this.contentLabels + 'table-partner.colum1',
      },
      {
        key: 'function',
        columName: this.contentLabels + 'table-partner.colum2',
      },
    ],
    dataSource: [
      {
        user: 'Sergio Aparicio Contreras',
        function: 'Ventas',
      },
    ],
  };

  dataTeam = {
    columnsShow: [
      {
        key: 'user',
        columName: this.contentLabels + 'table-partner.colum1',
      },
      {
        key: 'function',
        columName: this.contentLabels + 'table-partner.colum2',
      },
    ],
    dataSource: [
      {
        user: 'Sergio Aparicio Contreras',
        function: 'Ventas',
      },
    ],
  };

  dataActivityHistory = {
    columnsShow: ['subject', 'name', 'related', 'expiration', 'assignedTo'],
    dataSource: [
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
    ],
  };

  dataBill = {
    columnsShow: ['name', 'brm', 'saleId', 'address'],
    dataSource: [
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
    ],
  };

  dataFiles: { columnsShow: string[]; dataSource: IFile[] } = {
    columnsShow: ['title', 'lastUpdatedDate', 'size', 'action'],
    dataSource: [],
  };

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialogTeam(titulo: string): void {
    this.dialog.open(TeamComponent, { data: titulo });
  }

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
}
