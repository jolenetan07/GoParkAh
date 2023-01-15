import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: HomePage,
    children: [
      {
        path: 'main',
        children: [
          {
            path: '',
            loadChildren: () => import('./main/main.module').then( m => m.MainPageModule)
          }
        ]
      },
      {
        path: 'fav',
        children: [
          {
            path: '',
            loadChildren: () => import('./fav/fav.module').then( m => m.FavPageModule)
          }
        ]
      },
      {
        path: 'near',
        children: [
          {
            path: '',
            loadChildren: () => import('./near/near.module').then( m => m.NearPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/home/tabs/main',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home/tabs/main',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
