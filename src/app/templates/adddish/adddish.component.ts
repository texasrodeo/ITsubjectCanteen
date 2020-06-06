import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AccountantService} from "../../services/accountant.service";
import {TokenstorageService} from "../../services/tokenstorage.service";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-adddish',
  templateUrl: './adddish.component.html',
  styleUrls: ['./adddish.component.css']
})
export class AdddishComponent implements OnInit {

  currentUser;
  message;
  form: any = {};
  ingredients: any;
  products;

  selectedProduct;


  listIngredients:any[] = [];

  ingredientForm= this.fb.group({
    product:['']
  });

  constructor(private router: Router, private route: ActivatedRoute, private productService: AccountantService, private token: TokenstorageService,
              private fb: FormBuilder,) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.productService.findAllProducts().subscribe(data => {
      this.products = data;
    });
    if (!this.currentUser) {
      this.router.navigate(['/forbidden'], {queryParams: {code: 'autherror'}});
    } else if (!this.currentUser.roles.includes('ROLE_ADMIN')) {
      this.router.navigate(['/forbidden'], {queryParams: {code: 'norights'}});
    }

  }

  onSubmit() {

    this.productService.addDish(this.form, this.listIngredients).subscribe(
      data => {
        this.message = data.message;
        setTimeout(() => {
          this.router.navigate(['/cooker/dishes']);
        }, 2000);
      }
    );
  }


  hideById(id){
    document.getElementById(id).style.display='none';
  }

  blockById(id){
    document.getElementById(id).style.display='block';
  }



  addIngredient(){
    this.ingredientForm.reset();
    this.blockById('ingredientForm');
    this.hideById('addIngredient');
  }

  deleteIngredient(j){
    let p = this.listIngredients[j];
    this.products.push(p);
    this.listIngredients.splice(j,1);
  }

  saveIngredient(){
          let p = this.getProductById(this.ingredientForm.value.product);
          this.listIngredients.push(p);
    const index = this.products.indexOf(p, 0);
    if (index > -1) {
      this.products.splice(index, 1);
    }
          console.log(this.listIngredients);
          this.blockById('addIngredient');
          this.hideById('ingredientForm');
  }

  closeIngredient(){
    this.blockById('addIngredient');
    this.hideById('ingredientForm');
  }

  onSubmitDish() {

  }

  private getProductById(product: any) {
    for(let p of this.products){
      if(p.id.toString() === product)
        return p;
    }
  }
}
