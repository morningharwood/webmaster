import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FirebaseModule } from '@morningharwood/firebase';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { FormlyModule } from '@ngx-formly/core';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
} from '@angular/material';
import { SelectCollectionModule } from './select-collection/select-collection.module';
import { RepeatTypeComponent } from './repeat-section';


@NgModule({
  declarations: [
    AppComponent,
    RepeatTypeComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    NxModule.forRoot(),
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    SelectCollectionModule,
    FirebaseModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({
      types: [
        {
          name: 'repeat',
          component: RepeatTypeComponent,
        },
      ],
    }),
    FormlyMaterialModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ],
})
export class AppAuthorModule {
}
