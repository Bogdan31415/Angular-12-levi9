import { createSelector } from '@ngrx/store'

import { UserStateInterface } from "./types/user-state.interface";
import { AppStateInterface } from "../../shared/types/app-state.interface";

const usersFeature = (state: AppStateInterface) => state.users;

export const isLoadingSelector = createSelector(
  usersFeature,
  (usersState: UserStateInterface) => usersState.isLoading
)

export const errorSelector = createSelector(
  usersFeature,
  (usersState: UserStateInterface) => usersState.error
)

export const usersSelector = createSelector(
  usersFeature,
  (usersState: UserStateInterface) => usersState.data
)

export const selectIsDataEmpty = createSelector(
  usersFeature,
  (state: UserStateInterface) => !(state && state.data?.length > 0)
);
