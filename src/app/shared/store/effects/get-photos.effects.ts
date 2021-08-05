import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';
import { select, Store } from "@ngrx/store";

import { ItemService } from "../../services/item.service";
import { isLoadedSelector } from "../selectors";
import { getPhotosAction, getPhotosFailureAction, getPhotosSuccessAction } from "../actions/get-users.action";
import { ItemStateInterface } from "../../types/app-state.interface";
import { Photo } from "../../types/photo.entity";


@Injectable()
export class GetPhotosEffects {
  getArticle$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(getPhotosAction),
        withLatestFrom(this.store.pipe(select(isLoadedSelector<Photo, ItemStateInterface<Photo>>("photos")))),
        switchMap(([, loaded]) => {
          if (loaded) {
            return EMPTY
          }
          return this.itemService.getItems().pipe(
            map((items: Photo[]) => {
              return getPhotosSuccessAction<Photo>()({ items });
            }),

            catchError((err) => {
              return of(getPhotosFailureAction({ error: err }));
            })
          )
        })
      );
    }
  )

  constructor(
    private readonly store: Store,
    private readonly actions$: Actions,
    private readonly itemService: ItemService<Photo>
  ) {}
}
