import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {AccountantService} from "../../services/accountant.service";
import {ActivatedRoute, Router} from "@angular/router";
import {TokenstorageService} from "../../services/tokenstorage.service";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  currentUser;
  orders;
  page = 0;
  pages: Array<number>;
  size = 5;
  querySubscription: Subscription;
  key;
  message;

  constructor(private accountantService: AccountantService, private route: ActivatedRoute, private token: TokenstorageService,
              private router: Router) {
    this.querySubscription = route.params.subscribe(
      (queryParam: any) => {
        this.key = queryParam.status;
      }
    );
  }

  ngOnInit(): void {
    this.message = "";
    this.currentUser = this.token.getUser();
    if(this.key === "active"){
      this.accountantService.findActiveOrders(this.page, this.size).subscribe(data => {

        this.orders = data.content;
        console.log(this.orders);
        this.pages = new Array(data.totalPages);
      });
    }
    if(this.key === "confirmed"){
      this.accountantService.findConfirmedOrders(this.page, this.size).subscribe(data => {
        this.orders = data.content;
        this.pages = new Array(data.totalPages);
      });
    }
  }

  setPage(i: number, event: any) {
    event.preventDefault();
    this.page = i;
    this.ngOnInit();
  }

  acceptOrder(id: any) {
    this.accountantService.confirmDelivery(id).subscribe(
      data => {
        this.message = data.message;

        setTimeout(() => {
          this.ngOnInit();
        }, 2000);
      }
    );
  }

}
