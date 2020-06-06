import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AccountantService} from "../../services/accountant.service";
import {TokenstorageService} from "../../services/tokenstorage.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-addprovider',
  templateUrl: './addprovider.component.html',
  styleUrls: ['./addprovider.component.css']
})
export class AddproviderComponent implements OnInit {

  currentUser;
  message;


  form: any = {};

  constructor(private router: Router, private route: ActivatedRoute, private productService: AccountantService, private token: TokenstorageService) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    if (!this.currentUser) {
      this.router.navigate(['/forbidden'], {queryParams: {code: 'autherror'}});
    } else if (!this.currentUser.roles.includes('ROLE_ADMIN')) {
      this.router.navigate(['/forbidden'], {queryParams: {code: 'norights'}});
    }

  }

  onSubmit() {


    this.productService.addProvider(this.form).subscribe(

      data => {
        this.message = data.message;
        setTimeout(() => {
          this.router.navigate(['/accountant/providers']);
        }, 2000);
      }
    );
  }
}
