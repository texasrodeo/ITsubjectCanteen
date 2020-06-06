import { Component, OnInit } from '@angular/core';
import {AccountantService} from "../../services/accountant.service";
import {ActivatedRoute, Router} from "@angular/router";
import {TokenstorageService} from "../../services/tokenstorage.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-delievers',
  templateUrl: './delievers.component.html',
  styleUrls: ['./delievers.component.css']
})
export class DelieversComponent implements OnInit {

  currentUser;
  deliveries;
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
      this.accountantService.findActiveDelievers(this.page, this.size).subscribe(data => {

        this.deliveries = data.content;
        console.log(this.deliveries);
        this.pages = new Array(data.totalPages);
      });
    }
    if(this.key === "confirmed"){
      this.accountantService.findConfirmedDelievers(this.page, this.size).subscribe(data => {
        this.deliveries = data.content;
        console.log(this.deliveries);
        this.pages = new Array(data.totalPages);
      });
    }
  }

  setPage(i: number, event: any) {
    event.preventDefault();
    this.page = i;
    this.ngOnInit();
  }

  acceptDelivery(id: any) {
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
