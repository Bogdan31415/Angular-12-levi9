import { Action, createReducer, on } from '@ngrx/store'

import { UserStateInterface } from "./types/user-state.interface";
import {
  getUsersAction,
  getUsersFailureAction,
  getUsersSuccessAction
} from "./actions/get-users.action";
import { setActivedUserAction } from "./actions/activated-user.action";

const initialState: UserStateInterface = {
  loaded: false,
  data: null,
  isLoading: true,
  error: null
}

const userReducer = createReducer(
  initialState,
  on(getUsersAction, (state): UserStateInterface => ({
      ...state,
      isLoading: false
    })
  ),
  on(
    getUsersSuccessAction,
    (state, action): UserStateInterface => ({
      ...state,
      isLoading: false,
      loaded: true,
      data: action.users
    })
  ),
  on(setActivedUserAction, (state, action) => ({
      ...state,
      data: action.users
    })
  ),
  on(
    getUsersFailureAction,
    (state, action): UserStateInterface => ({
      ...state,
      isLoading: false,
      error: action.error
    })
  )
)

export function reducers(state: UserStateInterface, action: Action) {
  return userReducer(state, action)
}
