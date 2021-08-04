import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

import { BasePostSelfService } from "../../shared/services/base-post-self.service";
import { select, Store } from "@ngrx/store";
import { getPostsAction } from "../store/actions/get-posts.action";
import { errorPostSelector, isLoadingPostSelector, selectIsPostEmpty } from "../store/selectors";

@Injectable()
export class PostSelfService extends BasePostSelfService {
  public isLoading$!: Observable<boolean>;
  public error$!: Observable<string | null>;
  public isDataEmpty$!: Observable<boolean>;

  constructor(store: Store) {
    super(store)
  }

  public fetchData(): void {
    this.store.dispatch(getPostsAction());
  }

  public initializeValues(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingPostSelector));
    this.error$ = this.store.pipe(select(errorPostSelector));
    this.isDataEmpty$ = this.store.pipe(select(selectIsPostEmpty));
  }
}
