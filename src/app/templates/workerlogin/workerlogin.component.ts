import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-workerlogin',
  templateUrl: './workerlogin.component.html',
  styleUrls: ['./workerlogin.component.css']
})
export class WorkerloginComponent implements OnInit {

  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  role: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    let s = [];
    s.push("ROLE_USER");
    s.push(this.role);
    if(this.form.secret === this.authService.secret){

      this.authService.register(this.form, s).subscribe(
        data => {
          this.isSuccessful = true;
          this.isSignUpFailed = false;
          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 4000);
        },
        err => {
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
        }
      );
    }
    else {
      this.errorMessage = "Неверный секретный ключ";
      this.isSignUpFailed = true;
    }
  }

}
