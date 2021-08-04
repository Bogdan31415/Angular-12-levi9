import { User } from "../../../shared/types/user.entity";

export interface UserStateInterface {
  isLoading: boolean
  error: string | null
  data: User[] | null
}
