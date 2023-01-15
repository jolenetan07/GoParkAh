import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarparkDetailPage } from './carpark-detail.page';

const routes: Routes = [
  {
    path: '',
    component: CarparkDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarparkDetailPageRoutingModule {}
