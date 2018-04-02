import { Injectable } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Injectable()
export class MessagesService {
  // @Output() messageFound = new EventEmitter();
  message: string = '';

  loggedIn = false;

  constructor() { }

  setMessage(msg) {
    console.log("setting msg :" + msg);
    this.message = msg;
    // this.messageFound.emit(msg);
  }

  getMessage() {
    console.log("returning msg : " + this.message);
    return this.message;
  }

  setLoggedInStatus(status) {
    this.loggedIn = status;
  }

  getLoggedInStatus() {
    return this.loggedIn;
  }

}
