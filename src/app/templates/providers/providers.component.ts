import { Component, OnInit } from '@angular/core';
import {AccountantService} from "../../services/accountant.service";
import {ActivatedRoute} from "@angular/router";
import {TokenstorageService} from "../../services/tokenstorage.service";

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.css']
})
export class ProvidersComponent implements OnInit {

  currentUser;
  products;
  page = 0;
  pages: Array<number>;
  size = 5;

  constructor(private accountantService: AccountantService, private route: ActivatedRoute, private token: TokenstorageService,) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.accountantService.findProviders(this.page, this.size).subscribe(data => {
      this.products = data.content;
      console.log(this.products)
      this.pages = new Array(data.totalPages);
    });
  }

  setPage(i: number, event: any) {
    event.preventDefault();
    this.page = i;
    this.ngOnInit();
  }

}
