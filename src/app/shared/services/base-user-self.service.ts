import { Injectable, OnDestroy } from '@angular/core';
import { DefaultProjectorFn, MemoizedSelector, select, Store } from "@ngrx/store";
import { Observable, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { cloneDeep } from "lodash";

import { User } from "../types/user.entity";
import { allUsersSelector, selectIsDataActivatedEmpty } from "../../users/store/selectors";
import { setActivedUserAction } from "../../users/store/actions/activated-user.action";
import { AppStateInterface } from "../types/app-state.interface";

@Injectable()
export class BaseUserSelfService implements OnDestroy {
  public users$!: Observable<User[] | null>;
  public isDataEmpty$!: Observable<boolean>;

  protected users!: User[];
  protected readonly destroy$: Subject<boolean> = new Subject();

  constructor(protected store: Store) { }

  public initializeValues(): void {
    this.isDataEmpty$ = this.store.pipe(select(selectIsDataActivatedEmpty));
  }

  public initializeListeners(usersSelector: MemoizedSelector<AppStateInterface, User[], DefaultProjectorFn<User[]>>): void {
    this.users$ = this.store.pipe(select(usersSelector));
  }

  public changeUserActivated(activatedUser: User): void {
    this.store.pipe(select(allUsersSelector), takeUntil(this.destroy$))
      .subscribe((users) =>
        this.users = users
      );
    const updateUsers = cloneDeep(this.users);
    const index = updateUsers.findIndex(user => user.id === activatedUser.id);

    updateUsers[index] = activatedUser;

    this.store.dispatch(setActivedUserAction({ users: updateUsers }));
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

}
