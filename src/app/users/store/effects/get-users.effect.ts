import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators'
import { EMPTY, of } from 'rxjs'

import { User } from "../../../shared/types/user.entity";
import { getUsersAction, getUsersFailureAction, getUsersSuccessAction } from "../actions/get-users.action";
import { UserService } from "../../services/user.service";
import { select, Store } from "@ngrx/store";
import { isLoadedSelector } from "../selectors";


@Injectable()
export class GetUsersEffect {
  getArticle$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(getUsersAction),
        withLatestFrom(this.store.pipe(select(isLoadedSelector))),
        switchMap(([, loaded]) => {
          if (loaded) {
            return EMPTY
          }
          return this.userService.getUser().pipe(
            map((users: User[]) => {
              return getUsersSuccessAction({ users });
            }),

            catchError((err) => {
              return of(getUsersFailureAction({ error: err }));
            })
          )
        })
      );
    }
  )

  constructor(
    private readonly store: Store,
    private readonly actions$: Actions,
    private readonly userService: UserService
  ) {}
}
