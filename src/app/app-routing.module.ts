import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
    loadChildren: () =>
      import("./users/users.module").then(m => m.UsersModule)
  },
  {
    path: "posts",
    loadChildren: () =>
      import("./posts/posts.module").then(m => m.PostsModule)
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
