import {createAction, props} from '@ngrx/store'
import {ActionTypes} from '../action-types'
import { User } from "../../../shared/types/user.entity";

export const getUsersAction = createAction(
  ActionTypes.GET_USERS
)

export const getUsersSuccessAction = createAction(
  ActionTypes.GET_USERS_SUCCESS,
  props<{users: User[]}>()
)

export const getUsersFailureAction = createAction(
  ActionTypes.GET_USERS_FAILURE,
  props<{error: string}>()
)
