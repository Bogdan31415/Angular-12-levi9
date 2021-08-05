import { Injectable, OnDestroy } from '@angular/core';
import { DefaultProjectorFn, MemoizedSelector, select, Store } from "@ngrx/store";
import { Observable, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { cloneDeep } from "lodash";

import { selectData, selectIsActivatedEmpty } from "../store/selectors";
import { setItemsActivetedAction, setPostsActivetedAction } from "../store/actions/activated-user.action";
import { AppStateInterface, ItemStateInterface } from "../types/app-state.interface";
import { ItemService } from "./item.service";

@Injectable()
export class BaseItemSelfService<T extends { isActive: boolean , id:number }> implements OnDestroy {
  public type: string
  public items$!: Observable<T[] | null>;
  public isDataEmpty$!: Observable<boolean>;

  protected items!: T[];
  protected readonly destroy$: Subject<boolean> = new Subject();

  constructor(
    protected readonly store: Store,
              protected itemService: ItemService<T>
              ) {
  }

  public initializeValues(): void {
    this.isDataEmpty$ = this.store.pipe(select(selectIsActivatedEmpty<T, ItemStateInterface<T>>(this.type)));
  }

  public initializeListeners(itemSelector: MemoizedSelector<AppStateInterface, T[], DefaultProjectorFn<T[]>>): void {
    this.items$ = this.store.pipe(select(itemSelector));
  }

  public changeItemActivated(activatedItem: T): void {
    this.store.pipe(select(selectData<T, ItemStateInterface<T>>(this.type)), takeUntil(this.destroy$))
      .subscribe((items) =>
        this.items = items
      );
    const updateItems = cloneDeep(this.items);
    const index = updateItems.findIndex(item => item.id === activatedItem.id);

    updateItems[index] = activatedItem;

    if(this.type === "users"){
      this.store.dispatch(setItemsActivetedAction<T>()({ items: updateItems }));
    }
    else if(this.type === "posts"){
      this.store.dispatch(setPostsActivetedAction<T>()({ items: updateItems }));
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

}
