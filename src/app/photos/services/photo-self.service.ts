import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { select, Store } from "@ngrx/store";

import { BaseItemSelfService } from "../../shared/services/base-item-self.service";
import { errorSelector, isLoadingSelector, selectIsEmpty } from "../../shared/store/selectors";
import { ItemStateInterface } from "../../shared/types/app-state.interface";
import { getPhotosAction } from "../../shared/store/actions/get-users.action";
import { ItemService } from "../../shared/services/item.service";
import { Photo } from "../../shared/types/photo.entity";

@Injectable()
export class PhotoSelfService extends BaseItemSelfService<Photo> {
  public type = "photos"
  public isLoading$!: Observable<boolean>;
  public error$!: Observable<string | null>;
  public isDataEmpty$!: Observable<boolean>;

  constructor(
    store: Store,
    itemService: ItemService<Photo>
  ) {
    super(store, itemService)
    this.itemService.type = this.type
  }

  public fetchData(): void {
    this.store.dispatch(getPhotosAction({ itemType: this.type }));
  }

  public initializeValues(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector<Photo,ItemStateInterface<Photo>>(this.type)));
    this.error$ = this.store.pipe(select(errorSelector<Photo,ItemStateInterface<Photo>>(this.type)));
    this.isDataEmpty$ = this.store.pipe(select(selectIsEmpty<Photo,ItemStateInterface<Photo>>(this.type)));
  }
}
