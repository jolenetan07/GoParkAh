import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { CarparksService } from 'src/app/home/carparks.service';

@Component({
  selector: 'app-report-fault',
  templateUrl: './report-fault.component.html',
  styleUrls: ['./report-fault.component.scss'],
})
export class ReportFaultComponent implements OnInit {

  form: FormGroup;

  constructor(
    private modalCtrl: ModalController,
    private carparkService: CarparksService,
    private actionSheetCtrl: ActionSheetController,
  ) { }

  ngOnInit() {
    
    this.form = new FormGroup({
      title: new FormControl(null, {
        updateOn: 'blur',
      }), 
      description: new FormControl(null, {
        updateOn: 'blur',
      }),
    });
  }

  onCancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  submitReportFault() {
    if (!this.form.valid) {
      return;
    }
    this.carparkService.addFault(this.form.value.title, this.form.value.description);
    this.form.reset();
    this.modalCtrl.dismiss();
  }

  uploadImage() {
    this.actionSheetCtrl.create({
      header: 'Please Choose',
      buttons: [
        { 
          text: 'Take Photo', 
          handler: () => { 
            console.log("Take Photo");
          } 
        },
        {
          text: 'Select From Gallery', 
          handler: () => { 
            console.log("Choose Photo");
          }
        },
        { text: 'Cancel', role: 'cancel' }
      ]
    })
    .then(actionSheetEl => {
      actionSheetEl.present();
    });

  }

}
