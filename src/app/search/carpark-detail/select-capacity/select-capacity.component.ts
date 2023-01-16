import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { CarparksService } from 'src/app/home/carparks.service';

@Component({
  selector: 'app-select-capacity',
  templateUrl: './select-capacity.component.html',
  styleUrls: ['./select-capacity.component.scss'],
})
export class SelectCapacityComponent implements OnInit {

  //@ViewChild('f', { static: true }) form: NgForm;
  @ViewChild('f') capacityForm: NgForm;

  constructor(
    private modalCtrl: ModalController,
    private carparkService: CarparksService
  ) { }

  ngOnInit() {
    
  }

  onCancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  submitSelectCapacity() {
    this.carparkService.updateCapacity(this.capacityForm.value['capacity']);
    this.modalCtrl.dismiss();
  }

}
