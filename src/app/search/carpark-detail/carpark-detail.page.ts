import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionSheetController, ModalController, NavController } from '@ionic/angular';
import { Carpark } from 'src/app/home/carpark.model';
import { CarparksService } from 'src/app/home/carparks.service';
import { ReportFaultComponent } from './report-fault/report-fault.component';
import { SelectCapacityComponent } from './select-capacity/select-capacity.component';

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
    private actionSheetCtrl: ActionSheetController,
    private modalCtrl: ModalController
    // private router: Router
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('postalId')) {
        this.navCtrl.navigateBack('/search');
        return;
      }
      
      this.isLoading = true;
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

  chooseAction() {
    this.actionSheetCtrl.create({
      header: 'Please Choose',
      buttons: [
        { 
          text: 'Select Capacity', 
          handler: () => { 
            //this.openPostModal('capacity'); 
            this.onSelectCapacity();
            
          } 
        },
        {
          text: 'Report Fault', 
          handler: () => { 
            //this.openPostModal('fault'); 
            this.onReportFault();
          }
        },
        { text: 'Cancel', role: 'cancel' }
      ]
    })
    .then(actionSheetEl => {
      actionSheetEl.present();
    });

  }

  // selectCapacity() {
  //   console.log('select capacity');
  // }

  // reportFault() {
  //   console.log('report fault');
  // }

  openPostModal(mode: 'capacity' | 'fault') {
    console.log(mode);
  }

  onReportFault() {
    this.modalCtrl
      .create({ component: ReportFaultComponent })
      .then(modalEl => {
        modalEl.present();
        return modalEl.onDidDismiss();
      })
      .then(resultData => {
        console.log(resultData.data, resultData.role);
        if (resultData.role === 'confirm') {
          console.log('edited!');
        }
      });
  }

  onSelectCapacity() {
    this.modalCtrl
      .create({ component: SelectCapacityComponent })
      .then(modalEl => {
        modalEl.present();
        return modalEl.onDidDismiss();
      })
      .then(resultData => {
        console.log(resultData.data, resultData.role);
        if (resultData.role === 'confirm') {
          console.log('edited!');
        }
      });
  }


}
