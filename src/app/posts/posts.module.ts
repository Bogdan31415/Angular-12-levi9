import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostListComponent } from './components/post-list/post-list.component';
import { PostsRouting } from "./posts-routing.module";


@NgModule({
  declarations: [
    PostListComponent
  ],
  imports: [
    CommonModule,
    PostsRouting
  ]
})
export class PostsModule {}
