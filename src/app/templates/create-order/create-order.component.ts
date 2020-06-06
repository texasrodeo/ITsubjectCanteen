import { Component, OnInit } from '@angular/core';
import {Dishinorder} from "../../models/dishinorder";
import {BagComponent} from "../bag/bag.component";
import {BagstorageService} from "../../services/bagstorage.service";
import {AccountantService} from "../../services/accountant.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {

  items: Dishinorder[];
  form: any = {};
  message;

  constructor(private bag:BagstorageService, private service:AccountantService,
              private router: Router) { }

  ngOnInit(): void {
    this.items = this.bag.getBag();
  }

  calculateSum() {
    let sum=0;
    for(let i of this.items){
      sum+= i.dish.price * i.quantity;
    }
    return sum;
  }

  sendOrder() {
    this.service.sendOrder(this.form, this.items, this.calculateSum()).subscribe(
      data => {
        this.message = data.message;
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 2000);
      }
    );
  }

  onSubmitDish() {

  }
}
