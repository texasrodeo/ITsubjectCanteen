import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {AccountantService} from "../../services/accountant.service";
import {ActivatedRoute, Router} from "@angular/router";
import {TokenstorageService} from "../../services/tokenstorage.service";

@Component({
  selector: 'app-editdish',
  templateUrl: './editdish.component.html',
  styleUrls: ['./editdish.component.css']
})
export class EditdishComponent implements OnInit {

  currentUser;
  dish;
  id;

  form: any ={};

  querySubscription: Subscription;

  message;

  constructor(private accountantService: AccountantService, private route: ActivatedRoute, private token: TokenstorageService,
              private router: Router) {
    this.querySubscription = route.params.subscribe(
      (queryParam: any) => {
        this.id = queryParam.id;
      }
    );
  }

  ngOnInit(): void {
    this.message = "";
    this.currentUser = this.token.getUser();

      this.accountantService.findDish(this.id).subscribe(data => {
        this.dish = data;})
  }

}
