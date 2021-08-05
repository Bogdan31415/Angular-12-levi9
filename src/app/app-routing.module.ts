import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserListComponent } from "./users/components/user-list/user-list.component";
import { PostListComponent } from "./posts/components/post-list/post-list.component";
import { PhotoListComponent } from "./photos/components/photo-list/photo-list.component";
import { ActivatedListComponent } from "./activated/components/activated-list/activated-list.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full'
  },
  {
    path: "activated",
    component:ActivatedListComponent
  },
  {
    path: "users",
    component: UserListComponent
  },
  {
    path: "posts",
    component: PostListComponent
  },
  {
    path: "photos",
    component: PhotoListComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
