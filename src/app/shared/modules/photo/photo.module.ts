import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoComponent } from './component/photo/photo.component';
import { MaterialModule } from "../../../material.module";


@NgModule({
  declarations: [
    PhotoComponent
  ],
  exports: [
    PhotoComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class PhotoModule {}
