import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  name: string = '';
  mobile: string = '';
  email: string = '';
  password: string = '';
  constructor(
    public http: Http,
    public router: Router
  ) { }

  ngOnInit() {
  }

  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;

    const inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode !== 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  register() {
    this.http.post("http://localhost:3000/register",
      {
        email: this.email,
        password: this.password,
        name: this.name,
        mobile: this.mobile
      }
    )
      .subscribe(
        (result: any) => {
          console.log(result);
          if (JSON.parse(result._body).status === 200) {
            this.router.navigate(['login']);
          }
        }
      );
  }

}
