import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NearPage } from './near.page';

const routes: Routes = [
  {
    path: '',
    component: NearPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NearPageRoutingModule {}
