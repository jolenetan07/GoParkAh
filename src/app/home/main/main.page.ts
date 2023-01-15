import { Component, OnInit } from '@angular/core';
import { Carpark } from '../carpark.model';
import { CarparksService } from '../carparks.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  loadedFavCarparks: Carpark[];
  loadedNearCarparks: Carpark[];

  constructor(
    private carparkService: CarparksService,
  ) { }

  ngOnInit() {
    this.loadedFavCarparks = this.carparkService.favCarparks;
    this.loadedNearCarparks = this.carparkService.nearCarparks;
  }

}
