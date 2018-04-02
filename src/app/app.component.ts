import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { MessagesService } from "./messages.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loggedIn = false;

  constructor(
    public messagesService: MessagesService
  ) { }

  ngOnInit() {
    this.loggedIn = localStorage.loggedIn;
    // console.log(this.messagesService.getMessage());
  }

  logMessage(msg) {
    console.log(msg);
  }

  childEventLog(msg) {
    console.log("Event msg :: " + msg);
  }

  // loggedInFunc(status) {
  //   console.log("status recieved : " + status);
  //   this.loggedIn = status;
  // }

}