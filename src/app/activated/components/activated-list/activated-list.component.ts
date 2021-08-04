import { Component, OnInit, Self } from '@angular/core';

import { User } from "../../../shared/types/user.entity";
import { ActivatedUserSelfService } from "../../services/activated-user-self.service";
import { activeUsersSelector } from "../../../users/store/selectors";

@Component({
  selector: 'app-activated-list',
  templateUrl: './activated-list.component.html',
  styleUrls: ['./activated-list.component.scss'],
  providers: [ActivatedUserSelfService]
})
export class ActivatedListComponent implements OnInit {

  constructor(@Self() readonly activatedUserService: ActivatedUserSelfService) { }

  ngOnInit(): void {
    this.activatedUserService.initializeValues()
    this.activatedUserService.initializeListeners(activeUsersSelector)
  }

  public changeActivated(activatedUser: User) {
    this.activatedUserService.changeUserActivated(activatedUser)
  }
}
