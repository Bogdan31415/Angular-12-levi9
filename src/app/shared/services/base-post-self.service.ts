import { Injectable, OnDestroy } from '@angular/core';
import { DefaultProjectorFn, MemoizedSelector, select, Store } from "@ngrx/store";
import { Observable, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { cloneDeep } from "lodash";

import { selectIsDataActivatedEmpty } from "../../users/store/selectors";
import { AppStateInterface } from "../types/app-state.interface";
import { Post } from "../types/post.entity";
import { setActivedPostAction } from "../../posts/store/actions/activated-post.action";
import { allPostsSelector } from "../../posts/store/selectors";

@Injectable()
export class BasePostSelfService implements OnDestroy {
  public posts$!: Observable<Post[] | null>;
  public isDataEmpty$!: Observable<boolean>;

  protected posts!: Post[];
  protected readonly destroy$: Subject<boolean> = new Subject();

  constructor(protected store: Store) { }

  public initializeValues(): void {
    this.isDataEmpty$ = this.store.pipe(select(selectIsDataActivatedEmpty));
  }

  public initializeListeners(usersSelector: MemoizedSelector<AppStateInterface, Post[], DefaultProjectorFn<Post[]>>): void {
    this.posts$ = this.store.pipe(select(usersSelector));
  }

  public changePostActivated(activatedPost: Post): void {
    this.store.pipe(select(allPostsSelector), takeUntil(this.destroy$))
      .subscribe((posts) =>
        this.posts = posts
      );
    const updatePosts = cloneDeep(this.posts);
    const index = updatePosts.findIndex(post => post.id === activatedPost.id);

    updatePosts[index] = activatedPost;

    this.store.dispatch(setActivedPostAction({ posts: updatePosts }));
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

}
