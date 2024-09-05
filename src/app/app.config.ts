import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { routes } from './app.routes';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    provideFirebaseApp(() => initializeApp({
      apiKey: "AIzaSyBo2yt4BJIhYB1hOs2AVBspFYqsq9Dtho4",
      authDomain: "crudangular-df183.firebaseapp.com",
      projectId: "crudangular-df183",
      storageBucket: "crudangular-df183.appspot.com",
      messagingSenderId: "906793991635",
      appId: "1:906793991635:web:b73bbeb91029f2cb688326",
      measurementId: "G-HZXYB6T4RQ"
    })),
    provideFirestore(() => getFirestore()),

  ]
};
