import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class FeedsService {

  constructor(public http: Http) { }

  downloadFeeds() {
    return this.http.get('http://localhost:3000/feeds?token=' + localStorage.jwt);
  }

  downloadFeedsBySearch(keyword) {
    return this.http.post('http://localhost:3000/search?token=' + localStorage.jwt, { keyword: keyword });
  }
}
