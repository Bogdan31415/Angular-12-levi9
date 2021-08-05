import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from "@ngrx/effects";
import { UserModule } from "../shared/modules/user/user.module";
import { HttpClientModule } from "@angular/common/http";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { StoreModule } from "@ngrx/store";

import { PostListComponent } from './components/post-list/post-list.component';
import { GetPostsEffect } from "./store/effects/get-posts.effect";
import { PostModule } from "../shared/modules/post/post.module";
import { PostService } from "./services/post.service";
import { reducers } from "./store/reducers";
import { FlexModule } from "@angular/flex-layout";


@NgModule({
  declarations: [
    PostListComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('posts', reducers),
    EffectsModule.forFeature([GetPostsEffect]),
    UserModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    PostModule,
    FlexModule
  ],
  providers: [PostService]
})
export class PostsModule {}
