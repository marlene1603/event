import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth/auth.module';
import { AngularFireStorageModule } from '@angular/fire/storage/storage.module';



export const firebaseConfig = {
    
    apiKey: "AIzaSyA66UdA_FEMFrkxudvN7S9g6UwQ9u8c8H4",
    authDomain: "doualaevent-99487.firebaseapp.com",
    databaseURL: "https://doualaevent-99487.firebaseio.com",
    projectId: "doualaevent-99487",
    storageBucket: "",
    messagingSenderId: "1085956109781",
    appId: "1:1085956109781:web:5c051c36629c16f7"

};

AngularFireModule.initializeApp(firebaseConfig),
AngularFireDatabaseModule,
AngularFireAuthModule,
AngularFireStorageModule