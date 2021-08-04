import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PostListComponent } from "./components/post-list/post-list.component";

export const activatedRoute: Routes = [{
  path: "",
  component: PostListComponent
}];


@NgModule({
  imports: [RouterModule.forChild(activatedRoute)],
  exports: [RouterModule]
})

export class PostsRouting {
}
