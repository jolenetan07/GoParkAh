import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
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

}
