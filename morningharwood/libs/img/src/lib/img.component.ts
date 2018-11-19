import {
  Component,
  OnInit,
} from '@angular/core';


@Component({
  selector: 'mh-img',
  templateUrl: './img.component.html',
  styleUrls: [ './img.component.scss' ],
})
export class ImgComponent implements OnInit {
  constructor() {
  }

  private static getSchema() {
    return [
      {
        key: 'file',
        type: 'file',
      },
      {
        key: 'fileUrl',
        type: 'input',
        templateOptions: {
          label: 'fileUrl',
          placeholder: 'Upload an image and copy file URL',
          required: true,
        },
      },
    ];
  }

  ngOnInit() {
  }

}
