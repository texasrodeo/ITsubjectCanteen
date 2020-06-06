import { Component, OnInit } from '@angular/core';
import {AccountantService} from "../../services/accountant.service";
import {ActivatedRoute, Router} from "@angular/router";
import {TokenstorageService} from "../../services/tokenstorage.service";
import {Subscription} from "rxjs";
import {BagstorageService} from "../../services/bagstorage.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  private querySubscription: Subscription;
  private id: any;
  message;
   menu: any;

  constructor(private accountantService: AccountantService, private route: ActivatedRoute, private token: TokenstorageService,
              private router: Router, private bag: BagstorageService) {
    this.querySubscription = route.params.subscribe(
      (queryParam: any) => {
        this.id = queryParam.id;
      }
    );
  }

  ngOnInit(): void {
    this.message = ""
    this.accountantService.findMenu(this.id).subscribe(data => {
      console.log(data);
      this.menu = data;
    });
  }

  addTobag(m: any) {

    this.bag.addDish(m, 1);

    this.message = "Добавлен в корзину";
    setTimeout(() => {
      this.ngOnInit();
    }, 1500);
  }
}
