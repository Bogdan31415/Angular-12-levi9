import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostComponent } from './components/post/post.component';
import { MaterialModule } from "../../../material.module";


@NgModule({
  declarations: [
    PostComponent
  ],
  exports: [
    PostComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class PostModule {}
