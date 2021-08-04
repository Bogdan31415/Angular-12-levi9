import { Injectable } from '@angular/core';
import { select, Store } from "@ngrx/store";
import { getUsersAction } from "../store/actions/get-users.action";
import { Observable, of } from "rxjs";

import { User } from "../../shared/types/user.entity";
import { errorSelector, isLoadingSelector, selectIsDataEmpty, usersSelector } from "../store/selectors";
import { setActivedUserAction } from "../store/actions/activated-user.action";

@Injectable()
export class UserSelfService {
  public isLoading$!: Observable<boolean>;
  public error$!: Observable<string | null>;
  public users$!: Observable<User[] | null>;
  public isDataEmpty$!: Observable<boolean>;

  constructor(private store: Store) { }

  public fetchData(): void {
    this.store.dispatch(getUsersAction());
  }

  public initializeValues(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.isDataEmpty$ = this.store.pipe(select(selectIsDataEmpty));
  }

  public initializeListeners(): void {
    this.users$ = this.store.pipe(select(usersSelector));
  }

  public changeUserActivated(activatedUser: User) {
    const clone = {
      user: Object.assign({}, activatedUser)
    };
    this.store.dispatch(setActivedUserAction(clone))
  }
}
