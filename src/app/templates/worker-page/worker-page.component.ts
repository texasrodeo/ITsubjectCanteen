import { Component, OnInit } from '@angular/core';
import {TokenstorageService} from "../../services/tokenstorage.service";

@Component({
  selector: 'app-worker-page',
  templateUrl: './worker-page.component.html',
  styleUrls: ['./worker-page.component.css']
})
export class WorkerPageComponent implements OnInit {


  private roles: string[];
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

}
