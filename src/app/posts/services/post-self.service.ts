import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { select, Store } from "@ngrx/store";

import { BaseItemSelfService } from "../../shared/services/base-item-self.service";
import { Post } from "../../shared/types/post.entity";
import { errorSelector, isLoadingSelector, selectIsEmpty } from "../../shared/store/selectors";
import { ItemStateInterface } from "../../shared/types/app-state.interface";
import { getPostAction } from "../../shared/store/actions/get-users.action";
import { ItemService } from "../../shared/services/item.service";

@Injectable()
export class PostSelfService extends BaseItemSelfService<Post> {
  public type = "posts"
  public isLoading$!: Observable<boolean>;
  public error$!: Observable<string | null>;
  public isDataEmpty$!: Observable<boolean>;

  constructor(
    store: Store,
    itemService: ItemService<Post>
  ) {
    super(store, itemService)
    this.itemService.type = this.type
  }

  public fetchData(): void {
    this.store.dispatch(getPostAction({ itemType: this.type }));
  }

  public initializeValues(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector<Post,ItemStateInterface<Post>>(this.type)));
    this.error$ = this.store.pipe(select(errorSelector<Post,ItemStateInterface<Post>>(this.type)));
    this.isDataEmpty$ = this.store.pipe(select(selectIsEmpty<Post,ItemStateInterface<Post>>(this.type)));
  }
}
