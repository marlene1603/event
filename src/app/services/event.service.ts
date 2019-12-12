// import { Injectable } from '@angular/core';
// import { Event } from '../models/event.models';
// import { AngularFirestore } from '@angular/fire/firestore';

// @Injectable({
//   providedIn: 'root'
// })
// export class EventService {

//   constructor(private firestore: AngularFirestore) { }

//   createEvent(event: Event)
//   {
//     return this.firestore.collection('event').add(event);
//   }

//   getEvent()
//   {
//     return this.firestore.collection('event').snapshotChanges();
//   }
// }

import { Injectable } from '@angular/core';
import { Event } from '../models/event.models';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class EventService {
private eventListRef = this.db.list<Event>('event-list')
  constructor(private db: AngularFireDatabase) {

   }

  addEvent(event: Event)
  {
    return this.eventListRef.push(event);
  }

  getEventList()
  {
    return this.eventListRef;
  }
}
