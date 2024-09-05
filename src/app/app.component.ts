import { Component, inject } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import {CommonModule} from '@angular/common';

interface Item {
  name: string,
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'crudFirebase';

  item$: Observable<Item[]>;
  firestore: Firestore = inject(Firestore);

  constructor() {
    const itemCollection = collection(this.firestore, 'items');
    this.item$ = collectionData(itemCollection) as Observable<Item[]>;
  }
}
