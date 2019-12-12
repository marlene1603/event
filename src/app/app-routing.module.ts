import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import {AuthGuard} from './guards/auth.guard'

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  //{ path: '**', redirectTo: '' },
  //{ path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule'},
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule'},//canActivate: [AuthGuard] 
  { path: 'add-event', loadChildren: './add-event/add-event.module#AddEventPageModule', canActivate: [AuthGuard]},
  { path: 'detail-event', loadChildren: './detail-event/detail-event.module#DetailEventPageModule' },
  //{ path: 'best-places', loadChildren: './best-places/best-places.module#BestPlacesPageModule' },
  //{ path: 'my-events', loadChildren: './my-events/my-events.module#MyEventsPageModule' },
  //{ path: 'events', loadChildren: './events/events.module#EventsPageModule' },
  //{ path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
