import { Injectable } from '@angular/core';
import {Dishinorder} from "../models/dishinorder";

const BAG_KEY = 'bag';

@Injectable({
  providedIn: 'root'
})
export class BagstorageService {



  constructor() {
  }

  public saveBag(order: any) {
    window.sessionStorage.removeItem(BAG_KEY);
    window.sessionStorage.setItem(BAG_KEY, JSON.stringify(order));
  }

  public getKey(){
    return BAG_KEY;
  }

  public getBag(): Dishinorder[] {
    return JSON.parse(sessionStorage.getItem(BAG_KEY));

  }

  addDish(dish:any, quantity: number){
    let order = this.getBag();
    let d = new Dishinorder(dish, quantity);
    if(!order){
      order = [];
    }
    for(let o of order){
      if(o.dish.id === d.dish.id){
        o.quantity++;
        this.saveBag(order);
        return;
      }
    }
    order.push(d);
    this.saveBag(order);

  }

  increaseQuantity(item: Dishinorder){
    let order = this.getBag();


    for(let o of order){
      if(o.dish.id === item.dish.id){
        o.quantity++;
        this.saveBag(order);
        return;
      }
    }
  }

  decreaseQuantity(item: Dishinorder){
    let order = this.getBag();
    for(let o of order){
      if(o.dish.id === item.dish.id){
        if(o.quantity != 1){
          o.quantity--;
          this.saveBag(order);
        }
        return;
      }
    }
  }

  removeDish(dish: any){
    let order = this.getBag();

    for(let o of order){
      if(o.dish.id === dish.dish.id){
        const index = order.indexOf(o, 0);
        if (index > -1) {
          order.splice(index, 1);
        }
      }

    }
    this.saveBag(order);
  }
}
