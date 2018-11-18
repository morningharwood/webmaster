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
    ];
  }

  ngOnInit() {
  }

}
