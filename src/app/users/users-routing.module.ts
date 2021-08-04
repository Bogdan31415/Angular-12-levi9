import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { UserListComponent } from "./components/user-list/user-list.component";

export const activatedRoute: Routes = [{
  path: "",
  component: UserListComponent
}];


@NgModule({
  imports: [RouterModule.forChild(activatedRoute)],
  exports: [RouterModule]
})

export class UsersRouting {
}
