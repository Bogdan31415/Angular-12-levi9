import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators'
import { EMPTY, of } from 'rxjs'

import { select, Store } from "@ngrx/store";
import { Post } from "../../../shared/types/post.entity";
import { getPostsAction, getPostsFailureAction, getPostsSuccessAction } from "../actions/get-posts.action";
import { PostService } from "../../services/post.service";
import { isLoadedPostSelector } from "../selectors";


@Injectable()
export class GetPostsEffect {
  getArticle$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(getPostsAction),
        withLatestFrom(this.store.pipe(select(isLoadedPostSelector))),
        switchMap(([, loaded]) => {
          if (loaded) {
            return EMPTY
          }
          return this.postService.getPosts().pipe(
            map((posts: Post[]) => {
              return getPostsSuccessAction({ posts });
            }),

            catchError((err) => {
              return of(getPostsFailureAction({ error: err }));
            })
          )
        })
      );
    }
  )

  constructor(
    private readonly store: Store,
    private readonly actions$: Actions,
    private readonly postService: PostService
  ) {}
}
