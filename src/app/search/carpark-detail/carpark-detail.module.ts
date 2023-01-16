import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarparkDetailPageRoutingModule } from './carpark-detail-routing.module';

import { CarparkDetailPage } from './carpark-detail.page';
import { ReportFaultComponent } from './report-fault/report-fault.component';
import { SelectCapacityComponent } from './select-capacity/select-capacity.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CarparkDetailPageRoutingModule
  ],
  declarations: [CarparkDetailPage, ReportFaultComponent, SelectCapacityComponent]
})
export class CarparkDetailPageModule {}
