import {createAction, props} from '@ngrx/store'
import { Post } from "../../../shared/types/post.entity";
import { ActionTypes } from "../action-types";

export const getPostsAction = createAction(
  ActionTypes.GET_POSTS
)

export const getPostsSuccessAction = createAction(
  ActionTypes.GET_POSTS_SUCCESS,
  props<{posts: Post[]}>()
)

export const getPostsFailureAction = createAction(
  ActionTypes.GET_POSTS_FAILURE,
  props<{error: string}>()
)
