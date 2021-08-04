import { Injectable } from '@angular/core';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { User } from "../../shared/types/user.entity";
import { BaseUserSelfService } from "../../shared/services/base-user-self.service";

@Injectable()
export class ActivatedUserSelfService extends BaseUserSelfService{
  public users$!: Observable<User[] | null>;
  public isDataEmpty$!: Observable<boolean>;

  constructor(store: Store) {
    super(store)
  }
}
