import { Injectable } from '@angular/core';
import { Store } from "@ngrx/store";

import { BaseItemSelfService } from "../../shared/services/base-item-self.service";
import { ItemService } from "../../shared/services/item.service";
import { Photo } from "../../shared/types/photo.entity";

@Injectable()
export class ActivatedPhotoSelfService extends BaseItemSelfService<Photo>{
  public type = "photos"

  constructor(
    store: Store,
    itemService: ItemService<Photo>
  ) {
    super(store, itemService)
  }
}
