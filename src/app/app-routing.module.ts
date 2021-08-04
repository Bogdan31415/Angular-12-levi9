import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserListComponent } from "./users/components/user-list/user-list.component";
import { PostListComponent } from "./posts/components/post-list/post-list.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full'
  },
  {
    path: "activated",
    loadChildren: () =>
      import("./activated/activated.module").then(m => m.ActivatedModule)
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
    loadChildren: () =>
      import("./photos/photos.module").then(m => m.PhotosModule)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
