import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators'
import { select, Store } from "@ngrx/store";
import { EMPTY, of } from 'rxjs'

import { ItemService } from "../../services/item.service";
import { isLoadedSelector } from "../selectors";
import {
  getItemFailureAction,
  getItemsSuccessAction, getUserAction
} from "../actions/get-users.action";
import { ItemStateInterface } from "../../types/app-state.interface";
import { User } from "../../types/user.entity";


@Injectable()
export class GetItemsEffect {
  getArticle$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(getUserAction),
        withLatestFrom(this.store.pipe(select(isLoadedSelector<User, ItemStateInterface<User>>("users")))),
        switchMap(([,loaded]) => {
          if (loaded) {
            return EMPTY
          }
          return this.itemService.getItems().pipe(
            map((items: User[]) => {
              return getItemsSuccessAction<User>()({items});
            }),

            catchError((err) => {
              return of(getItemFailureAction({ error: err }));
            })
          )
        })
      );
    }
  )

  constructor(
    private readonly store: Store,
    private readonly actions$: Actions,
    private readonly itemService: ItemService<User>
  ) {}
}
