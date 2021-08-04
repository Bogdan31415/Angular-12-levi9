import {Injectable} from '@angular/core'
import {createEffect, Actions, ofType} from '@ngrx/effects'
import {map, catchError, switchMap} from 'rxjs/operators'
import {of} from 'rxjs'

import { User } from "../../../shared/types/user.entity";
import {

  getUsersSuccessAction
} from "../actions/get-users.action";
import { Store } from "@ngrx/store";
import { setActivedUserAction } from "../actions/activated-user.action";
import { isActivated } from "../../../shared/types/acviveted-emit.interface";



@Injectable()
export class GetUsersEffect {
  getArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(setActivedUserAction),
      switchMap((user: isActivated) => {
        return this.userService.getUser().pipe(
          map((users: User[]) => {
            return getUsersSuccessAction({users})
          }),
        )
      })
    )
  )

  constructor(
    private actions$: Actions,
    private store: Store
  ) {}
}
