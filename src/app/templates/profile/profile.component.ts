import { Component, OnInit } from '@angular/core';
import {TokenstorageService} from "../../services/tokenstorage.service";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser: any;
  emailConfirmed = false;
  message: string;
  roles: any;

  constructor(private token: TokenstorageService, private app: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.currentUser = this.token.getUser();
    console.log(this.currentUser);
    this.roles = this.token.getUser().roles;
    console.log(this.roles);
    if (this.currentUser) {
      // this.app.checkEmail(this.currentUser.id).subscribe(
      //   data => {
      //     this.emailConfirmed = data.res;
      //   }
      //);
      // this.storeService.findPurchases(this.currentUser.id).subscribe(
      //   data => {
      //     this.purchases = data.items;
      //     this.message = data.message;
      //   }
      // );
    } else {
      this.router.navigate(['/forbidden'], {queryParams: {code: 'autherror'}});
    }
  }

}
