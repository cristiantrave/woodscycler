import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FirestoreService } from './services/firestore/firestore.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public woods = [];

  constructor(private firestoreService: FirestoreService) {
  }

  ngOnInit(): void {
    this.firestoreService.getWoods().subscribe((woodsSnapshot) => {
      this.woods = [];
      woodsSnapshot.forEach((woodData: any) => {
        this.woods.push({
          id: woodData.payload.doc.id,
          data: woodData.payload.doc.data()
        });
      })
    });
  }

  addWood(wood) {
    this.firestoreService.createWood({name: wood.value, size: 16});
  }

  updateWood(id, woodName) {
    this.firestoreService.updateWood(id, {name: woodName.value});
  }

  deleteWood(id) {
    this.firestoreService.deleteWood(id);
  }
}
