import { Component, OnInit } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';
import { Carpark } from '../carpark.model';
import { CarparksService } from '../carparks.service';

@Component({
  selector: 'app-fav',
  templateUrl: './fav.page.html',
  styleUrls: ['./fav.page.scss'],
})
export class FavPage implements OnInit {

  loadedCarparks?: Carpark[];

  constructor(private carparkService: CarparksService) { }

  ngOnInit() {
    this.loadedCarparks = this.carparkService.favCarparks;
  }

 

  onRemovePlace(postal: string, slidingEl: IonItemSliding) {
    slidingEl.close();
    console.log(postal);
  }

}
