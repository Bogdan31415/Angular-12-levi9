import { createAction, props } from "@ngrx/store";

import { ActionTypes } from "../action-types";


export function setItemsActivetedAction<T>() {
  return createAction(
    ActionTypes.ACTIVATED_ITEMS,
    props<{ items: T[] }>()
  )
}

export function setPostsActivetedAction<T>() {
  return createAction(
    ActionTypes.ACTIVATED_POSTS,
    props<{ items: T[] }>()
  )
}
