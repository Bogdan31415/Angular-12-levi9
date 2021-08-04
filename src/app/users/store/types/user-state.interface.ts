import { User } from "../../../shared/types/user.entity";

export interface UserStateInterface {
  isLoading: boolean
  loaded: boolean,
  error: string | null
  data: User[] | null
}
