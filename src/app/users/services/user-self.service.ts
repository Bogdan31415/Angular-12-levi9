import { Injectable } from '@angular/core';
import { select, Store } from "@ngrx/store";
import { getUsersAction } from "../store/actions/get-users.action";
import { Observable } from "rxjs";

import { errorSelector, isLoadingSelector, selectIsDataEmpty } from "../store/selectors";
import { BaseUserSelfService } from "../../shared/services/base-user-self.service";

@Injectable()
export class UserSelfService extends BaseUserSelfService {
  public isLoading$!: Observable<boolean>;
  public error$!: Observable<string | null>;
  public isDataEmpty$!: Observable<boolean>;

  constructor(store: Store) {
    super(store)
  }

  public fetchData(): void {
    this.store.dispatch(getUsersAction());
  }

  public initializeValues(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.isDataEmpty$ = this.store.pipe(select(selectIsDataEmpty));
  }
}
