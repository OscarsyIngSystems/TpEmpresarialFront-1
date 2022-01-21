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
  @Input() data: any;

  disabled: boolean = false;

  constructor(
    public router: Router,
    public storageService: StorageService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.checkRouteDeletedSites()
  }

  checkRouteDeletedSites() {
    if(this.router.url == '/quotes/deleted-sites') this.disabled = true;
    if(this.router.url == '/opportunities/0641878') this.disabled = true;
    if(this.router.url == '/opportunities/1417596') this.disabled = true;
    if(this.router.url == '/opportunities/6541580') this.disabled = true;
    if(this.router.url == '/opportunities/8203539') this.disabled = true;
    if(this.router.url == '/opportunities/7903573') this.disabled = true;
    if(this.router.url == '/opportunities/1904294') this.disabled = true;
    if(this.router.url == '/opportunities/9343807') this.disabled = true;
    if(this.router.url == '/opportunities/1208286') this.disabled = true;
    if(this.router.url == '/opportunities/3401680') this.disabled = true;
    if(this.router.url == '/opportunities/9417417') this.disabled = true;
    if(this.router.url == '/quotes/related') this.disabled = true;

    return this.disabled
  }

  newOportunity(): void {
    if (this.data) {
      this.router.navigateByUrl(this.route, {
        state: { data: this.data },
      });
      this.storageService.setDataName(null);
    } else {
      this.router.navigate([this.route]);
    }
  }

  openRelated(): void {
    this.router.navigate([this.relatedRoute]);
  }

  openDialogLoadMassive() {
    this.dialog.open(DialogMassiveLoadSitesComponent);
  }

  onNavigate() {
    this.router.navigate(['/quotes/sites'])
  }

  onLoadedSites() {
    this.router.navigate(['/quotes/loaded-sites'])
  }

}
