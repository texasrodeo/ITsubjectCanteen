import { Component } from '@angular/core';
import {TokenstorageService} from "./services/tokenstorage.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Сайт столовой';
   roles: string[];
  isLoggedIn = false;
  username: string;

  constructor(private tokenStorageService: TokenstorageService ) {
  }

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.username = user.username;
    }
  }

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

  refresh() {
    this.ngOnInit();
  }
}
