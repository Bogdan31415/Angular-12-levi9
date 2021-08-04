import { createAction, props } from "@ngrx/store";

import { ActionTypes } from "../action-types";
import { User } from "../../../shared/types/user.entity";

export const setActivedUserAction = createAction(
  ActionTypes.ACTIVATED_USERS,
  props<{ user: User }>()
)
