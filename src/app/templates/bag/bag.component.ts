import { Component, OnInit } from '@angular/core';
import {Dishinorder} from "../../models/dishinorder";
import {BagstorageService} from "../../services/bagstorage.service";

@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.css']
})
export class BagComponent implements OnInit {

  items: Dishinorder[];

  constructor(private bag: BagstorageService) { }

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

  deleteItem(item: Dishinorder) {
    this.bag.removeDish(item);
    this.ngOnInit();
  }

  decreaseQuantity(item: Dishinorder) {
    this.bag.decreaseQuantity(item);
    this.items = this.bag.getBag();
  }

  increaseQuantity(item: Dishinorder) {
    this.bag.increaseQuantity(item);
    this.items = this.bag.getBag();
  }
}
