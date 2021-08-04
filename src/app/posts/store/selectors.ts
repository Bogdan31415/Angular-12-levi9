import { createSelector } from '@ngrx/store'

import { AppStateInterface } from "../../shared/types/app-state.interface";
import { PostStateInterface } from "./types/post-state.interface";

const postsFeature = (state: AppStateInterface) => state.posts;

export const isLoadingPostSelector = createSelector(
  postsFeature,
  (postsState: PostStateInterface) => postsState.isLoading
)

export const isLoadedPostSelector = createSelector(
  postsFeature,
  (postsState: PostStateInterface) => postsState.loaded
)

export const errorPostSelector = createSelector(
  postsFeature,
  (postsState: PostStateInterface) => postsState.error
)

export const postsSelector = createSelector(
  postsFeature,
  (postsState: PostStateInterface) => postsState.data.filter((post) => !post.isActive)
)

export const allPostsSelector = createSelector(
  postsFeature,
  (postsState: PostStateInterface) => postsState.data
)

export const activePostsSelector = createSelector(
  postsFeature,
  (postsState: PostStateInterface) => postsState.data.filter((post) => post.isActive)
)

export const selectIsPostEmpty = createSelector(
  postsFeature,
  (postsState: PostStateInterface) => {
    const activatedPosts = postsState.data?.filter((post) => !post.isActive)
    return !(activatedPosts && activatedPosts?.length > 0)
  }
);

export const selectIsPostActivatedEmpty = createSelector(
  postsFeature,
  (postsState: PostStateInterface) => {
    const activatedPosts = postsState.data?.filter((post) => post.isActive)
    return !(activatedPosts && activatedPosts?.length > 0)
  }
);
