import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from "@angular/router";
import { MessagesService } from "../../messages.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() loginChildEvent = new EventEmitter();
  forgotPassword = false;
  email: string = '';
  password: string = '';
  recoveryEmail: string = '';

  constructor(
    public http: Http,
    public router: Router,
    public messagesService: MessagesService
  ) { }

  ngOnInit() {
    if (localStorage && localStorage.jwt && localStorage.loggedIn) {
      this.router.navigate(['dashboard']);
    }
  }

  showForgotpassword() {
    this.forgotPassword = !this.forgotPassword;
  }

  login() {
    this.http.post("http://localhost:3000/login",
      {
        email: this.email,
        password: this.password
      }
    )
      .subscribe(
        (result: any) => {
          let status = '';
          console.log(result._body);
          status = JSON.parse(result._body).result;
          if (status === 'match') {
            localStorage.loggedIn = true;
            this.messagesService.setMessage("Logged in.");
            // this.messagesService.setLoggedInStatus(true);
            this.loginChildEvent.emit("event message...");

            localStorage.jwt = JSON.parse(result._body).jwt;
            this.router.navigate(['dashboard']);
          }
        }
      );
  }

  resetPassword() {
    this.http.post("http://localhost:3000/forgot-password",
      {
        email: this.recoveryEmail
      }
    )
      .subscribe(
        (result: any) => {
          console.log(result);
          // let status = '';
          // console.log(result._body);
          // status = JSON.parse(result._body).result;
          // if (status === 'match') {
          //   localStorage.loggedIn = true;
          //   this.router.navigate(['dashboard']);
          // }
        }
      );
  }
}