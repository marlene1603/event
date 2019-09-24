import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(public router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): Promise<boolean> {

      return new Promise((resolve, reject) => {
          firebase.auth().onAuthStateChanged(user => {
              if (user) {
                  // User is signed in.
                  resolve(true);
              } else {
                  // No user is signed in.
                  resolve(false);
                  this.router.navigate(['login']);
              }
          });
      });
  }

}
