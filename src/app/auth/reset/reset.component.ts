import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {
  token: string = '';
  newPassword: string = '';

  constructor(
    public http: Http,
    public router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  resetPassword() {
    this.route.params.subscribe(params => {
      this.token = params['token'];
      console.log(this.token);

      this.http.post('http://localhost:3000/reset/' + this.token, {
        newPassword: this.newPassword
      })
        .subscribe((result) => {
          console.log(result);
        });
    });
  }
}
