import { createAction, props } from "@ngrx/store";

import { ActionTypes } from "../action-types";
import { Post } from "../../../shared/types/post.entity";

export const setActivedPostAction = createAction(
  ActionTypes.ACTIVATED_POSTS,
  props<{ posts: Post[] }>()
)
