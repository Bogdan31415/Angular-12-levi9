import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoListComponent } from './components/photo-list/photo-list.component';
import { PhotosRouting } from "./photos-routing.module";


@NgModule({
  declarations: [
    PhotoListComponent
  ],
  imports: [
    CommonModule,
    PhotosRouting
  ]
})
export class PhotosModule {}
