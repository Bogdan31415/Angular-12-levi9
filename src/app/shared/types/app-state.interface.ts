import { UserStateInterface } from "../../users/store/types/user-state.interface";
import { PostStateInterface } from "../../posts/store/types/post-state.interface";

export interface AppStateInterface {
  users: UserStateInterface,
  posts: PostStateInterface
}
