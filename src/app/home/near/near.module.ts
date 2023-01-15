import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NearPageRoutingModule } from './near-routing.module';

import { NearPage } from './near.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NearPageRoutingModule
  ],
  declarations: [NearPage]
})
export class NearPageModule {}
