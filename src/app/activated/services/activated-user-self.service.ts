import { Injectable } from '@angular/core';
import { Store } from "@ngrx/store";

import { User } from "../../shared/types/user.entity";
import { BaseItemSelfService } from "../../shared/services/base-item-self.service";
import { ItemService } from "../../shared/services/item.service";

@Injectable()
export class ActivatedUserSelfService extends BaseItemSelfService<User>{
  public type = "users"

  constructor(
    store: Store,
    itemService: ItemService<User>
  ) {
    super(store, itemService)
  }
}
