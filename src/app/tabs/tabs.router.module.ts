import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'events',
        children: [
          {
            path: '',
            loadChildren: '../events/events.module#EventsPageModule'
          },
        ]
      },
      {
        path: 'best-places',
        children: [
          {
            path: '',
            loadChildren: '../best-places/best-places.module#BestPlacesPageModule'
          }
        ]
      },
      {
        path: 'my-events',
        children: [
          {
            path: '',
            loadChildren: '../my-events/my-events.module#MyEventsPageModule',
            canActivate: [AuthGuard]
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/events',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/events',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
