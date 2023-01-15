import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  handleChange(event) {
    const query = event.target.value;
    console.log(query);
  }

}
