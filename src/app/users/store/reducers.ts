import {createReducer, on, Action} from '@ngrx/store'

import { UserStateInterface } from "./types/user-state.interface";
import { getUsersAction, getUsersFailureAction, getUsersSuccessAction } from "./actions/get-users.action";
import { setActivedUserAction } from "./actions/activated-user.action";

const initialState: UserStateInterface = {
  data: null,
  isLoading: false,
  error: null
}

const userReducer = createReducer(
  initialState,
  on(getUsersAction, (state): UserStateInterface => ({
      ...state,
      isLoading: true
    })
  ),
  on(
    getUsersSuccessAction,
    (state, action): UserStateInterface => ({
      ...state,
      isLoading: false,
      data: action.users
    })
  ),
  on(setActivedUserAction, (state, action) => {
    const user = state.data[state.data.findIndex((users) => users.id === action.user.id)]
    user.isActive = !user.isActive
    return {
      ...state,
      data: { ...state.data, ...user },
    }
  }),
  on(
    getUsersFailureAction,
    (state): UserStateInterface => ({
      ...state,
      isLoading: false
    })
  )
)

export function reducers(state: UserStateInterface, action: Action) {
  return userReducer(state, action)
}
