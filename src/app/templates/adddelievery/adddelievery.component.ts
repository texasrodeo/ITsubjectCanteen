import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AccountantService} from "../../services/accountant.service";
import {TokenstorageService} from "../../services/tokenstorage.service";

@Component({
  selector: 'app-adddelievery',
  templateUrl: './adddelievery.component.html',
  styleUrls: ['./adddelievery.component.css']
})
export class AdddelieveryComponent implements OnInit {

  currentUser;
  message;
  form: any = {};

  products;
  providers;
  selectedProduct: any;
  selectedProvider: any;
  quantity: any;
  sum: any;
  constructor(private router: Router, private route: ActivatedRoute, private productService: AccountantService, private token: TokenstorageService) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    if (!this.currentUser) {
      this.router.navigate(['/forbidden'], {queryParams: {code: 'autherror'}});
    } else if (!this.currentUser.roles.includes('ROLE_ADMIN')) {
      this.router.navigate(['/forbidden'], {queryParams: {code: 'norights'}});
    }
    this.productService.findAllProducts().subscribe(
      data =>{

        this.products= data;
      }
    );
    this.productService.findAllProviders().subscribe(
      data =>{
        this.providers= data;
      }
    );


  }
  getProductById(id: number): number{
    for(let p of this.products){
      if(p.id.toString() === id.toString()){
        return p.price;
      }

    }
  }

  count(id: any, quantity: any) {
    let price =  this.getProductById(id)
    return price*quantity;
  }

  onSubmit() {


    this.sum = this.count(this.selectedProduct, this.quantity);

    this.productService.addDelivery(this.selectedProduct, this.selectedProvider, this.quantity, this.sum, this.currentUser.id).subscribe(
      data => {

        this.message = data.message;
        setTimeout(() => {
          this.router.navigate(['/accountant']);
        }, 2000);
      }
    );
  }



}
