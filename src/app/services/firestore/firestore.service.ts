import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    private firestore: AngularFirestore
  ) {}

    public getWoods() {
      return this.firestore.collection('woods').snapshotChanges();
    }

    public createWood(data: {name: string, size: number}) {
      return this.firestore.collection('woods').add(data);
    }

    public updateWood(id, data) {
      return this.firestore.collection('woods').doc(id).update(data);
    }

    public deleteWood(id) {
      return this.firestore.collection('woods').doc(id).delete();
    }
}
