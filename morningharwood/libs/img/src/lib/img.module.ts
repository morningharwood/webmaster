import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgComponent } from './img.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ImgComponent],
  exports: [ImgComponent]
})
export class ImgModule {}
