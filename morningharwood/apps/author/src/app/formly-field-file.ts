import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-file',
  template: `
    <mh-file-upload></mh-file-upload>
  `,
})
export class FormlyFieldFile extends FieldType {}
