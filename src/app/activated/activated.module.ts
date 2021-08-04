import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivatedListComponent } from './components/activated-list/activated-list.component';
import { ActivatedRoutes } from "./activated-routing.module";
import { UserModule } from "../shared/modules/user/user.module";
import { PostModule } from "../shared/modules/post/post.module";
import { PhotoModule } from "../shared/modules/photo/photo.module";



@NgModule({
  declarations: [
    ActivatedListComponent
  ],
  imports: [
    CommonModule,
    ActivatedRoutes,
    UserModule,
    PostModule,
    PhotoModule
  ]
})
export class ActivatedModule { }
