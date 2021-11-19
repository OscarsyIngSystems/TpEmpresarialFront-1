import { Component, EventEmitter, Output } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Output() emiter = new EventEmitter();
  user!: User;
  constructor() {
    this.user = {
      name: 'LORD',
      lastName: 'Jassiel',
    };
  }

  displayMenu(): void {
    this.emiter.emit(true);
  }

  getInitials(): string {
    return this.user.name.substr(0, 1) + ' ' + this.user.lastName.substr(0, 1);
  }

  get countNotifications(): string | number {
    let notificationsLength = 100; //this.notifications.length;
    return notificationsLength > 99 ? '99+' : notificationsLength;
  }
}
