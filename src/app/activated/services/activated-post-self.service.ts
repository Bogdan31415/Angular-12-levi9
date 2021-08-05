import { Injectable } from '@angular/core';
import { Store } from "@ngrx/store";

import { BaseItemSelfService } from "../../shared/services/base-item-self.service";
import { Post } from "../../shared/types/post.entity";
import { ItemService } from "../../shared/services/item.service";

@Injectable()
export class ActivatedPostSelfService extends BaseItemSelfService<Post>{
  public type = "post"

  constructor(
    store: Store,
    itemService: ItemService<Post>
  ) {
    super(store, itemService)
  }
}
