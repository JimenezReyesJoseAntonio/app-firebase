import { Component, inject } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import {CommonModule} from '@angular/common';
import { AuthService } from './services/auth.service';
import { NavComponent } from './components/nav/nav.component';

interface Item {
  name: string,
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'crudFirebase';

  item$: Observable<Item[]>;
  firestore: Firestore = inject(Firestore);

  constructor( public authService: AuthService) {
    const itemCollection = collection(this.firestore, 'items');
    this.item$ = collectionData(itemCollection) as Observable<Item[]>;
  }

  
}
