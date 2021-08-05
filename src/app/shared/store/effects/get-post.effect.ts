import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators'
import { EMPTY, of } from 'rxjs'

import { ItemService } from "../../services/item.service";
import { select, Store } from "@ngrx/store";
import { isLoadedSelector } from "../selectors";
import {
  getItemFailureAction,
  getPostAction, getPostSuccessAction
} from "../actions/get-users.action";
import { ItemStateInterface } from "../../types/app-state.interface";
import { Post } from "../../types/post.entity";


@Injectable()
export class GetPostEffect {
  getArticle$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(getPostAction),
        withLatestFrom(this.store.pipe(select(isLoadedSelector<Post, ItemStateInterface<Post>>("posts")))),
        switchMap(([,loaded]) => {
          if (loaded) {
            return EMPTY
          }
          return this.itemService.getItems().pipe(
            map((items: Post[]) => {
              return getPostSuccessAction<Post>()({items});
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
    private readonly itemService: ItemService<Post>
  ) {}
}
