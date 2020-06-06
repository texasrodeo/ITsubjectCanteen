import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AccountantService} from "../../services/accountant.service";
import {TokenstorageService} from "../../services/tokenstorage.service";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-addmenu',
  templateUrl: './addmenu.component.html',
  styleUrls: ['./addmenu.component.css']
})
export class AddmenuComponent implements OnInit {

  currentUser;
  message;
  form: any = {};
  ingredients: any;
  dishes;

  selectedProduct;


  listDishes:any[] = [];

  ingredientForm= this.fb.group({
    product:['']
  });

  constructor(private router: Router, private route: ActivatedRoute, private productService: AccountantService, private token: TokenstorageService,
              private fb: FormBuilder,) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.productService.findAllDishes().subscribe(data => {
      this.dishes = data;
    });
    if (!this.currentUser) {
      this.router.navigate(['/forbidden'], {queryParams: {code: 'autherror'}});
    } else if (!this.currentUser.roles.includes('ROLE_ADMIN')) {
      this.router.navigate(['/forbidden'], {queryParams: {code: 'norights'}});
    }

  }

  onSubmit() {

    this.productService.addMenu(this.form, this.listDishes).subscribe(
      data => {
        this.message = data.message;
        setTimeout(() => {
          this.router.navigate(['/cooker/menus']);
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

  deleteDish(j){
    let p = this.listDishes[j];
    this.dishes.push(p);
    this.listDishes.splice(j,1);
  }

  saveDish(){
    let p = this.getDishById(this.ingredientForm.value.product);
    this.listDishes.push(p);
    const index = this.dishes.indexOf(p, 0);
    if (index > -1) {
      this.dishes.splice(index, 1);
    }
    console.log(this.listDishes);
    this.blockById('addIngredient');
    this.hideById('ingredientForm');
  }

  closeDish(){
    this.blockById('addIngredient');
    this.hideById('ingredientForm');
  }

  onSubmitDish() {

  }

  private getDishById(product: any) {
    for(let p of this.dishes){
      if(p.id.toString() === product)
        return p;
    }
  }

}
