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
      let target = paramMap.get('postalId');
      console.log(target, typeof(target));
      this.place = this.carparkService.allCarparks.find(
        (p) => p.postal === paramMap.get("postalId")
      );
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
