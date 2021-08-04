import { Post } from "../../../shared/types/post.entity";

export interface PostStateInterface {
  isLoading: boolean
  loaded: boolean,
  error: string | null
  data: Post[] | null
}
