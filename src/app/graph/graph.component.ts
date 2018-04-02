import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { Http } from '@angular/http';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  cities = [];
  tweets = [];
  constructor(public http: Http) { }

  ngOnInit() {
    this.downloadGraphData();
    // this.drawGraph();
  }

  downloadGraphData() {
    this.http.get('http://localhost:3000/graph-data' + '?token=' + localStorage.jwt)
      .subscribe(
        (result: any) => {
          console.log(result);
          this.cities = JSON.parse(result._body).data.cities;
          this.tweets = JSON.parse(result._body).data.tweets;
          this.drawGraph();
        }
      )
  }

  drawGraph() {
    var ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [...this.cities],
        datasets: [{
          label: '# of tweets',
          data: [...this.tweets],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }
}
