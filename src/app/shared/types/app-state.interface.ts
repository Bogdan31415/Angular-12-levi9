import { User } from "./user.entity";
import { Post } from "./post.entity";
import { Photo } from "./photo.entity";

export interface AppStateInterface {
  users: ItemStateInterface<User>,
  posts: ItemStateInterface<Post>,
  photos: ItemStateInterface<Photo>,
}

export interface ItemStateInterface<T> {
  isLoading: boolean
  loaded: boolean
  error: string | null
  data: T[] | null
  itemType: string | null
}
