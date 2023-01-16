import { Component, OnInit } from '@angular/core';
import { Carpark } from '../home/carpark.model';
import { CarparksService } from '../home/carparks.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  foundCarparks: Carpark;
  foundDistance: number;

  constructor(
    private carparkService: CarparksService
  ) { }

  ngOnInit() {
  }

  handleChange(event) {
    const query = event.target.value;
    console.log(query);
    this.searchCarpark(query);
  }

  searchCarpark(postal: string) {
    let totalLen = this.carparkService.allCarparks.length;
    for (let i = 0; i < totalLen; i++) {
      let indivLen = this.carparkService.allCarparks[i].nearby.length;
      for(let j = 0; j < indivLen; j++) {
        if (postal === this.carparkService.allCarparks[i].nearby[j].postal) {
          console.log(this.carparkService.allCarparks[i]);
          this.foundCarparks = this.carparkService.allCarparks[i];
          this.foundDistance = this.carparkService.allCarparks[i].nearby[j].dist;
        }
      }
    }
  }

}
