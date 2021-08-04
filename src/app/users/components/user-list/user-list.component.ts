import { Component, OnInit, Self } from '@angular/core';

import { UserSelfService } from "../../services/user-self.service";
import { User } from "../../../shared/types/user.entity";

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
    this.userService.initializeValues()
    this.userService.initializeListeners()
  }

  public changeActivated(activatedUser: User) {
    this.userService.changeUserActivated(activatedUser)
  }
}
