import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class TrendingTopicsService {

  constructor(public http: Http) { }

  downloadTrendingTopics(location) {
    return this.http.get('http://localhost:3000/trending-topics/' + location + '?token=' + localStorage.jwt);
  }

}

