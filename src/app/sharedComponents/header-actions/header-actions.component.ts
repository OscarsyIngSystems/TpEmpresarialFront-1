import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  @Input() isCreate: boolean = false;

  constructor(private router: Router, public storageService: StorageService) {}

  newOportunity(): void {
    this.router.navigate([this.route]);
  }

  openRelated(): void {
    this.router.navigate([this.relatedRoute]);
  }

  ngOnInit(): void {}
}
