import { Component, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';

import { TrendingTopicsService } from "../trending-topics.service";

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {
  @Input() location: string;
  topics: any = [];
  constructor(public trendingTopicsService: TrendingTopicsService) { }

  ngOnInit() {
    this.getTrending();
  }

  getTrending() {
    this.trendingTopicsService.downloadTrendingTopics(this.location)
      .subscribe(
        (result: any) => {
          // console.log(JSON.parse(result._body)[0].trends);
          let res = JSON.parse(result._body)[0];
          this.topics = res.trends;
        }
      )
  }

}
