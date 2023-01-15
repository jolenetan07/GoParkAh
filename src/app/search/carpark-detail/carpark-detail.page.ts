import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carpark-detail',
  templateUrl: './carpark-detail.page.html',
  styleUrls: ['./carpark-detail.page.scss'],
})
export class CarparkDetailPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  upVote() {
    console.log('+1');
  }

  downVote() {
    console.log('-1');
  }

}
