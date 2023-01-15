import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Carpark } from 'src/app/home/carpark.model';
import { CarparksService } from 'src/app/home/carparks.service';

@Component({
  selector: 'app-carpark-detail',
  templateUrl: './carpark-detail.page.html',
  styleUrls: ['./carpark-detail.page.scss'],
})
export class CarparkDetailPage implements OnInit {
  isLoading = false;
  place: Carpark;

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private carparkService: CarparksService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('postalId')) {
        this.navCtrl.navigateBack('/search');
        return;
      }
      
      this.isLoading = true;
      this.place = this.carparkService.getCarpark(paramMap.get('postalId'));
      console.log('found', this.place);
      this.isLoading = false;
      
      
    });
  }

  upVote() {
    console.log('+1');
  }

  downVote() {
    console.log('-1');
  }

}
