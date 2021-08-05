import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { HttpClientModule } from "@angular/common/http";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

import { UserListComponent } from './components/user-list/user-list.component';
import { UserModule } from "../shared/modules/user/user.module";
import { reducers } from "../shared/store/reducers";
import { GetItemsEffect } from "../shared/store/effects/get-items.effect";
import { ItemService } from "../shared/services/item.service";


@NgModule({
  declarations: [
    UserListComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('users', reducers),
    EffectsModule.forFeature([GetItemsEffect]),
    UserModule,
    HttpClientModule,
    MatProgressSpinnerModule
  ],
  providers: [ItemService]
})
export class UsersModule {
}
