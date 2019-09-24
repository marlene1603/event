import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Profile } from '../models/profile.models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: firebase.User;
  profile: Profile;

  profileCollection: string = 'profiles';

  constructor(private fireAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router) {

      firebase.auth().onAuthStateChanged(
        (user) => { 
          this.user = user; 
          console.log(this.user);
          if(user){ this.loadProfile();}
        }
      );
  }

  register(email: string, password: string){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
        res => resolve(res),
        err => reject(err))
    })
  }

  login(email: string, password: string){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        res => resolve(res),
        err => reject(err))
    })
  }

  logout(){
    this.fireAuth.auth.signOut()
       .then( () => this.router.navigate(['/']))
  }

  addNewProfile(name: string, email: string){
    return this.afs.collection(this.profileCollection).add(Object.assign({},
      {'userId': this.user.uid, 'name': name, 'email': email, 'registrationDate': new Date(), 'photoUrl': ''}));
  }

  editProfile(){

  }

  loadProfile(){
    this.afs.collection<Profile>(this.profileCollection, ref =>
        ref.where('userId', '==', this.user.uid)).get();
  }
}
