import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ActivatedListComponent } from "./components/activated-list/activated-list.component";

export const activatedRoute: Routes = [{
  path: "",
  component: ActivatedListComponent
}];


@NgModule({
  imports: [RouterModule.forChild(activatedRoute)],
  exports: [RouterModule]
})

export class ActivatedRoutes {
}
