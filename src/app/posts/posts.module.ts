import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from "@ngrx/effects";
import { UserModule } from "../shared/modules/user/user.module";
import { HttpClientModule } from "@angular/common/http";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { StoreModule } from "@ngrx/store";
import { FlexModule } from "@angular/flex-layout";

import { PostListComponent } from './components/post-list/post-list.component';
import { PostModule } from "../shared/modules/post/post.module";
import { ItemService } from "../shared/services/item.service";
import { postReducers } from "../shared/store/reducers";
import { GetPostEffect } from "../shared/store/effects/get-post.effect";


@NgModule({
  declarations: [
    PostListComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('posts', postReducers),
    EffectsModule.forFeature([GetPostEffect]),
    UserModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    PostModule,
    FlexModule
  ],
  providers: [ItemService]
})
export class PostsModule {}
