import {
  Component,
  Input,
  OnInit,
} from '@angular/core';


@Component({
  selector: 'mh-img',
  templateUrl: './img.component.html',
  styleUrls: [ './img.component.scss' ],
})
export class ImgComponent implements OnInit {
  @Input() data: any;

  constructor() {
  }

  private static getSchema() {
    return [
      {
        key: 'id',
        type: 'input',
        templateOptions: {
          label: 'unique key',
          placeholder: 'Add a unique key to identify the data',
          required: true,
        },
      },
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

  get fileUrl() {
    if (this.data && this.data.fileUrl) {
      return `https://morningharwood.imgix.net/images/${this.data.fileUrl}?q=auto&fm=jpg&auto=compress,enhance,format`;
    }
    return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HgAGgwJ/lK3Q6wAAAABJRU5ErkJggg==';
  }

  ngOnInit() {
  }

}
