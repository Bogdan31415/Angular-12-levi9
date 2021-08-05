import { createAction, props } from '@ngrx/store'
import { ActionTypes } from '../action-types'

export const getPostAction = createAction(
  ActionTypes.GET_POST,
  props<{ itemType: string }>()
)

export const getUserAction = createAction(
  ActionTypes.GET_ITEMS,
  props<{ itemType: string }>()
)

export const getItemFailureAction = createAction(
  ActionTypes.GET_ITEMS_FAILURE,
  props<{ error: string }>()
)

export function getItemsSuccessAction<T>() {
  return createAction(
    ActionTypes.GET_ITEMS_SUCCESS,
    props<{ items: T[] }>()
  )
}

export const getPostFailureAction = createAction(
  ActionTypes.GET_POST_FAILURE,
  props<{ error: string }>()
)

export function getPostSuccessAction<T>() {
  return createAction(
    ActionTypes.GET_POST_SUCCESS,
    props<{ items: T[] }>()
  )
}
