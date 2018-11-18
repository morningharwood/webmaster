import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectCollectionComponent } from './select-collection.component';
import { FirebaseModule } from '@morningharwood/firebase';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule
} from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    FirebaseModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyMaterialModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatSelectModule,
  ],
  declarations: [ SelectCollectionComponent ],
  exports: [ SelectCollectionComponent ]
})
export class SelectCollectionModule {
}
