import { Injectable } from '@angular/core';
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { errorSelector, isLoadingSelector, selectIsEmpty } from "../../shared/store/selectors";
import { BaseItemSelfService } from "../../shared/services/base-item-self.service";
import { ItemStateInterface } from "../../shared/types/app-state.interface";
import { User } from "../../shared/types/user.entity";
import { getUserAction } from "../../shared/store/actions/get-users.action";
import { ItemService } from "../../shared/services/item.service";

@Injectable()
export class UserSelfService extends BaseItemSelfService<User> {
  public type = "users"
  public isLoading$!: Observable<boolean>;
  public error$!: Observable<string | null>;
  public isDataEmpty$!: Observable<boolean>;

  constructor(
    store: Store,
    itemService: ItemService<User>
  ) {
    super(store, itemService)
    this.itemService.type = this.type
  }

  public fetchData(): void {
    this.store.dispatch(getUserAction({ itemType: this.type }));
  }

  public initializeValues(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector<User, ItemStateInterface<User>>(this.type)));
    this.error$ = this.store.pipe(select(errorSelector<User, ItemStateInterface<User>>(this.type)));
    this.isDataEmpty$ = this.store.pipe(select(selectIsEmpty<User, ItemStateInterface<User>>(this.type)));
  }
}
