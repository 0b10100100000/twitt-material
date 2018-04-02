import { Component, OnInit } from '@angular/core';
import { MessagesService } from "../messages.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  message: string = '';

  constructor(
    public messagesService: MessagesService
  ) { }

  ngOnInit() {
  }

  consoleMessage() {
    this.message = this.messagesService.getMessage();
    console.log("msg ::: " + this.message);
  }

  // displayMessage(msg) {
  //   this.message = msg;
  //   setTimeout(() => {
  //     this.message = '';
  //   }, 3000);
  // }
}
