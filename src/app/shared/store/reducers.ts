import { Action, createReducer, on } from '@ngrx/store'
import {
  getItemFailureAction,
  getItemsSuccessAction, getPostAction, getPostFailureAction, getPostSuccessAction, getUserAction,
} from "./actions/get-users.action";
import { ItemStateInterface } from "../types/app-state.interface";
import { setItemsActivetedAction, setPostsActivetedAction } from "./actions/activated-user.action";
import { User } from "../types/user.entity";
import { Post } from "../types/post.entity";

const initialState: ItemStateInterface<User> = {
  loaded: false,
  data: null,
  isLoading: true,
  error: null,
  itemType: null,
}

const initialPostState: ItemStateInterface<Post> = {
  loaded: false,
  data: null,
  isLoading: true,
  error: null,
  itemType: null,
}

const itemReducer = createReducer(
  initialState,
  on(getUserAction, (state, action): ItemStateInterface<User> => ({
      ...state,
      isLoading: false,
      itemType: action.itemType
    })
  ),
  on(
    getItemsSuccessAction<any>(),
    (state, action): ItemStateInterface<User> => ({
      ...state,
      isLoading: false,
      loaded: true,
      data: action.items
    })
  ),
  on(setItemsActivetedAction<User>(),
    (state, action) => ({
      ...state,
      data: action.items
    })
  ),
  on(
    getItemFailureAction,
    (state, action): ItemStateInterface<User> => ({
      ...state,
      isLoading: false,
      error: action.error
    })
  )
)

const postReducer = createReducer(
  initialPostState,
  on(getPostAction, (state, action): ItemStateInterface<Post> => ({
      ...state,
      isLoading: false,
      itemType: action.itemType
    })
  ),
  on(
    getPostSuccessAction<Post>(),
    (state, action): ItemStateInterface<Post> => ({
      ...state,
      isLoading: false,
      loaded: true,
      data: action.items
    })
  ),
  on(setPostsActivetedAction<Post>(),
    (state, action) => ({
      ...state,
      data: action.items
    })
  ),
  on(
    getPostFailureAction,
    (state, action): ItemStateInterface<Post> => ({
      ...state,
      isLoading: false,
      error: action.error
    })
  )
)

export function reducers(state: ItemStateInterface<User>, action: Action) {
  return itemReducer(state, action)
}

export function postReducers(state: ItemStateInterface<Post>, action: Action) {
  return postReducer(state, action)
}

