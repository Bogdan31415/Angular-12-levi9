import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { UserListComponent } from './components/user-list/user-list.component';
import { UsersRouting } from "./users-routing.module";
import { UserModule } from "../shared/modules/user/user.module";
import { reducers } from "./store/reducers";
import { GetUsersEffect } from "./store/effects/get-users.effect";
import { UserService } from "./services/user.service";
import { HttpClientModule } from "@angular/common/http";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";


@NgModule({
  declarations: [
    UserListComponent
  ],
  imports: [
    CommonModule,
    UsersRouting,
    StoreModule.forFeature('users', reducers),
    EffectsModule.forFeature([GetUsersEffect]),
    UserModule,
    HttpClientModule,
    MatProgressSpinnerModule
  ],
  providers: [UserService]
})
export class UsersModule {}
