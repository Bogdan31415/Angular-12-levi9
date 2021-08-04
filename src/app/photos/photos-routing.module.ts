import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PhotoListComponent } from "./components/photo-list/photo-list.component";


export const activatedRoute: Routes = [{
  path: "",
  component: PhotoListComponent
}];


@NgModule({
  imports: [RouterModule.forChild(activatedRoute)],
  exports: [RouterModule]
})

export class PhotosRouting {
}
