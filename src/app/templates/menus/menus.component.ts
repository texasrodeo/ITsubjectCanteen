import { Component, OnInit } from '@angular/core';
import {AccountantService} from "../../services/accountant.service";
import {ActivatedRoute} from "@angular/router";
import {TokenstorageService} from "../../services/tokenstorage.service";

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent implements OnInit {


  menus = [];
  page = 0;
  pages: Array<number>;
  size = 5;
  currentUser;

  constructor(private accountantService: AccountantService, private route: ActivatedRoute, private token: TokenstorageService,) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.accountantService.findMenus(this.page, this.size).subscribe(data => {
      console.log(data);
      this.menus = data.content;
      this.pages = new Array(data.totalPages);
    });
  }

  setPage(i: number, event: any) {
    event.preventDefault();
    this.page = i;
    this.ngOnInit();
  }


  deleteMenu(id: any) {

    this.accountantService.deleteMenu(id).subscribe(data => {
      this.ngOnInit();
    });
  }

}
