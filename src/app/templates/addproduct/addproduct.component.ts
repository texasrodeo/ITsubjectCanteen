import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TokenstorageService} from "../../services/tokenstorage.service";
import {AccountantService} from "../../services/accountant.service";

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

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
    this.productService.addProduct(this.form).subscribe(
      data => {
        this.message = data.message;
        setTimeout(() => {
          this.router.navigate(['/accountant/products']);
        }, 2000);
      }
    );
  }

}
