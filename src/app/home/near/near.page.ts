import { Component, OnInit } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';
import { Carpark } from '../carpark.model';
import { CarparksService } from '../carparks.service';

@Component({
  selector: 'app-near',
  templateUrl: './near.page.html',
  styleUrls: ['./near.page.scss'],
})
export class NearPage implements OnInit {

  loadedCarparks?: Carpark[];
  
  constructor(private carparkService: CarparksService) { }

  ngOnInit() {
    this.loadedCarparks = this.carparkService.nearCarparks;
    
  }

  onAddPlace(postal: string, slidingEl: IonItemSliding) {
    slidingEl.close();
    console.log(postal);
  }

}
