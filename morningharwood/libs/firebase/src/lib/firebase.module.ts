import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MorningHarwood } from './firebase-config';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';


@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(MorningHarwood, 'MorningHarwood'),
    AngularFirestoreModule,
  ],
})
export class FirebaseModule {
}
