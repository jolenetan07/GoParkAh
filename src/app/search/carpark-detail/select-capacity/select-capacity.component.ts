import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-select-capacity',
  templateUrl: './select-capacity.component.html',
  styleUrls: ['./select-capacity.component.scss'],
})
export class SelectCapacityComponent implements OnInit {

  capacityForm: FormGroup;

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    
  }

  onCancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  submitSelectCapacity() {
    console.log('capacity selected');
  }

}
