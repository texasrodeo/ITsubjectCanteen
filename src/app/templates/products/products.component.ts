import { Component, OnInit } from '@angular/core';
import {AccountantService} from "../../services/accountant.service";
import {ActivatedRoute} from "@angular/router";
import {TokenstorageService} from "../../services/tokenstorage.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products = [];
  page = 0;
  pages: Array<number>;
  size = 5;
  currentUser;

  constructor(private accountantService: AccountantService, private route: ActivatedRoute, private token: TokenstorageService,) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.accountantService.findProducts(this.page, this.size).subscribe(data => {
      this.products = data.content;
      this.pages = new Array(data.totalPages);
    });
  }

  setPage(i: number, event: any) {
    event.preventDefault();
    this.page = i;
    this.ngOnInit();
  }

}
