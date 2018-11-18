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
import { FormlyFieldFile } from './formly-field-file';
import { FileValueAccessor } from './file-value-accessor';
import { DropZoneDirective } from './drop-zone/drop-zone.directive';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FileSizePipe } from './file-upload/file-size.pipe';


@NgModule({
  declarations: [
    AppComponent,
    RepeatTypeComponent,
    FileValueAccessor,
    FormlyFieldFile,
    DropZoneDirective,
    FileUploadComponent,
    FileSizePipe,
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
        {
          name: 'file',
          component: FormlyFieldFile,
          wrappers: [ 'form-field' ],
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
