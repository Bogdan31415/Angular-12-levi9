import { Component, OnInit, Self } from '@angular/core';

import { UserSelfService } from "../../services/user-self.service";
import { User } from "../../../shared/types/user.entity";
import { itemsSelector } from "../../../shared/store/selectors";
import { ItemStateInterface } from "../../../shared/types/app-state.interface";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  providers: [UserSelfService]
})
export class UserListComponent implements OnInit {

  constructor(@Self() readonly userService: UserSelfService) { }

  ngOnInit(): void {
      this.userService.fetchData();
      this.userService.initializeValues();
      this.userService.initializeListeners(itemsSelector<User, ItemStateInterface<User>>("users"));
  }

  public changeActivated(user: User) {
    this.userService.changeItemActivated(user);
  }
}
