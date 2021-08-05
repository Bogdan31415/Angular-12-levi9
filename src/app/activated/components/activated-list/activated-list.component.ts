import { Component, OnInit, Self } from '@angular/core';

import { User } from "../../../shared/types/user.entity";
import { ActivatedUserSelfService } from "../../services/activated-user-self.service";
import { activeSelector } from "../../../shared/store/selectors";
import { ItemStateInterface } from "../../../shared/types/app-state.interface";
import { ActivatedPostSelfService } from "../../services/activated-post-self.service";
import { Post } from "../../../shared/types/post.entity";

@Component({
  selector: 'app-activated-list',
  templateUrl: './activated-list.component.html',
  styleUrls: ['./activated-list.component.scss'],
  providers: [ActivatedUserSelfService, ActivatedPostSelfService]
})
export class ActivatedListComponent implements OnInit {

  constructor(
    @Self() readonly activatedUserService: ActivatedUserSelfService,
    @Self() readonly activatedPostService: ActivatedPostSelfService
  ) { }

  ngOnInit(): void {
    this.initData()
  }

  public changeActivated(activatedUser: User) {
    this.activatedUserService.changeItemActivated(activatedUser);
  }

  public changePostActivated(activatedUser: Post) {
    this.activatedPostService.changeItemActivated(activatedUser);
  }

  private initData() {
    this.activatedUserService.initializeValues();
    this.activatedUserService.initializeListeners(activeSelector<User, ItemStateInterface<User>>("users"));
    this.activatedPostService.initializeValues();
    this.activatedPostService.initializeListeners(activeSelector<Post, ItemStateInterface<Post>>("posts"));
  }
}
