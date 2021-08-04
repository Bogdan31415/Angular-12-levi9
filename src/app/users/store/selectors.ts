import { createSelector } from '@ngrx/store'

import { UserStateInterface } from "./types/user-state.interface";
import { AppStateInterface } from "../../shared/types/app-state.interface";
import { state } from "@angular/animations";

const usersFeature = (state: AppStateInterface) => state.users;

export const isLoadingSelector = createSelector(
  usersFeature,
  (usersState: UserStateInterface) => usersState.isLoading
)

export const isLoadedSelector = createSelector(
  usersFeature,
  (usersState: UserStateInterface) => usersState.loaded
)

export const errorSelector = createSelector(
  usersFeature,
  (usersState: UserStateInterface) => usersState.error
)

export const usersSelector = createSelector(
  usersFeature,
  (usersState: UserStateInterface) => usersState.data.filter((user) => !user.isActive)
)

export const allUsersSelector = createSelector(
  usersFeature,
  (usersState: UserStateInterface) => usersState.data
)

export const activeUsersSelector = createSelector(
  usersFeature,
  (usersState: UserStateInterface) => usersState.data.filter((user) => user.isActive)
)

export const selectIsDataEmpty = createSelector(
  usersFeature,
  (usersState: UserStateInterface) => {
      const activatedUsers = usersState.data?.filter((user) => !user.isActive)
      return !(activatedUsers && activatedUsers?.length > 0)
  }
);

export const selectIsDataActivatedEmpty = createSelector(
  usersFeature,
  (usersState: UserStateInterface) => {
    const activatedUsers = usersState.data?.filter((user) => user.isActive)
    return !(activatedUsers && activatedUsers?.length > 0)
  }
);
