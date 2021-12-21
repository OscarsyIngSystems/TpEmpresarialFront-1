import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogMassiveLoadSitesComponent } from 'src/app/pages/accounts/components/dialog-massive-load-sites/dialog-massive-load-sites.component';
import { StorageService } from 'src/app/services/shared/storage.service';

@Component({
  selector: 'app-header-actions',
  templateUrl: './header-actions.component.html',
  styleUrls: ['./header-actions.component.scss'],
})
export class HeaderActionsComponent implements OnInit {
  @Input() title!: string;
  @Input() hidenCreateOportunity!: boolean;
  @Input() hasBackButton!: boolean;
  @Input() buttonText!: string;
  @Input() route!: string;
  @Input() relatedRoute!: string;
  @Input() relatedText = 'Relacionado';
  @Input() showRelatedText = true;
  @Input() loadSitesText = 'Carga masiva de sitios';
  @Input() isCreate: boolean = false;
  @Input() isLoadSites: boolean = false;

  constructor(
    private router: Router,
    public storageService: StorageService,
    private dialog: MatDialog
  ) {}

  newOportunity(): void {
    this.router.navigate([this.route]);
  }

  openRelated(): void {
    this.router.navigate([this.relatedRoute]);
  }

  openDialogLoadMassive() {
    this.dialog.open(DialogMassiveLoadSitesComponent);
  }
  ngOnInit(): void {}
}
