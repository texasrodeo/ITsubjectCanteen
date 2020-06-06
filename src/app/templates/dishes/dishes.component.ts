import { Component, OnInit } from '@angular/core';
import {AccountantService} from "../../services/accountant.service";
import {ActivatedRoute} from "@angular/router";
import {TokenstorageService} from "../../services/tokenstorage.service";

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {

  dishes = [];
  page = 0;
  pages: Array<number>;
  size = 5;
  currentUser;

  constructor(private accountantService: AccountantService, private route: ActivatedRoute, private token: TokenstorageService,) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.accountantService.findDishes(this.page, this.size).subscribe(data => {
      this.dishes = data.content;
      this.pages = new Array(data.totalPages);
    });
  }

  setPage(i: number, event: any) {
    event.preventDefault();
    this.page = i;
    this.ngOnInit();
  }


  deleteDish(id: any) {
    this.accountantService.deleteDish(id).subscribe(data => {
      this.ngOnInit();
    });
  }
}
