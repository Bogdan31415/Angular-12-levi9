import { Action, createReducer, on } from '@ngrx/store'

import { PostStateInterface } from "./types/post-state.interface";
import { getPostsAction, getPostsFailureAction, getPostsSuccessAction } from "./actions/get-posts.action";
import { setActivedPostAction } from "./actions/activated-post.action";

const initialState: PostStateInterface = {
  loaded: false,
  data: null,
  isLoading: true,
  error: null
}

const userReducer = createReducer(
  initialState,
  on(getPostsAction, (state): PostStateInterface => ({
      ...state,
      isLoading: false
    })
  ),
  on(
    getPostsSuccessAction,
    (state, action): PostStateInterface => ({
      ...state,
      isLoading: false,
      loaded: true,
      data: action.posts
    })
  ),
  on(setActivedPostAction, (state, action) => ({
      ...state,
      data: action.posts
    })
  ),
  on(
    getPostsFailureAction,
    (state, action): PostStateInterface => ({
      ...state,
      isLoading: false,
      error: action.error
    })
  )
)

export function reducers(state: PostStateInterface, action: Action) {
  return userReducer(state, action)
}
