import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, switchMap } from 'rxjs/operators'
import { of } from 'rxjs'

import { User } from "../../../shared/types/user.entity";
import { getUsersAction, getUsersFailureAction, getUsersSuccessAction } from "../actions/get-users.action";
import { UserService } from "../../services/user.service";


@Injectable()
export class GetUsersEffect {
  getArticle$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(getUsersAction),
        switchMap(() => {
          return this.userService.getUser().pipe(
            map((users: User[]) => {
              return getUsersSuccessAction({ users })
            }),

            catchError(() => {
              return of(getUsersFailureAction())
            })
          )
        })
      );
    }
  )

  constructor(
    private actions$: Actions,
    private userService: UserService
  ) {}
}
