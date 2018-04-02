import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { FeedsService } from "../feeds.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchQuery = '';
  searchResults: any = [];

  constructor(
    public feedsService: FeedsService,
    public router: Router
  ) { }

  ngOnInit() {
    if (!localStorage.loggedIn) {
      this.router.navigate(['/login']);
    }
  }

  searchByKeyword() {
    // this.searchQuery = '#mehul';
    this.feedsService.downloadFeedsBySearch(this.searchQuery)
      .subscribe(
        (result: any) => {
          console.log(JSON.parse(result._body).statuses);
          this.searchResults = JSON.parse(result._body).statuses;
        }
      );
  }
}
