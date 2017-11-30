import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'health-check-non-prod',
  templateUrl: './health-check-non-prod.component.html',
  styleUrls: ['./health-check-non-prod.component.sass']
})
export class HealthCheckNonProdComponent implements OnInit {

  timeStamp
  constructor() { }

  ngOnInit() {
    this.getTimeStamp()
  }

  getTimeStamp(){
    // Date HH MM SS
    let now = new Date()
    this.timeStamp = now.toUTCString()
  }
}
