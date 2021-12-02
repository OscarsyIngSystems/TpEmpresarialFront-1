import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}

  newOportunity() {
    this.router.navigate([this.route]);
  }

  ngOnInit(): void {}
}
