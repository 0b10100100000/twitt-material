import { Component, OnInit } from '@angular/core';
import { FeedsService } from '../feeds.service';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.css']
})
export class FeedsComponent implements OnInit {
  feeds: any = [];

  constructor(public feedsService: FeedsService) { }

  ngOnInit() {
    this.getFeeds();
  }

  getFeeds() {
    this.feedsService.downloadFeeds().subscribe(
      (result: any) => {
        // console.log(JSON.parse(result._body).feeds.statuses);
        this.feeds = JSON.parse(result._body).feeds.statuses;
      }
    )
  }
}
