import { Component, OnInit, Self } from '@angular/core';

import { User } from "../../../shared/types/user.entity";
import { ActivatedUserSelfService } from "../../services/activated-user-self.service";
import { activeSelector } from "../../../shared/store/selectors";
import { ItemStateInterface } from "../../../shared/types/app-state.interface";
import { ActivatedPostSelfService } from "../../services/activated-post-self.service";
import { Post } from "../../../shared/types/post.entity";
import { ActivatedPhotoSelfService } from "../../services/activated-photo-self.service";
import { Photo } from "../../../shared/types/photo.entity";

@Component({
  selector: 'app-activated-list',
  templateUrl: './activated-list.component.html',
  styleUrls: ['./activated-list.component.scss'],
  providers: [ActivatedUserSelfService, ActivatedPostSelfService, ActivatedPhotoSelfService]
})
export class ActivatedListComponent implements OnInit {

  constructor(
    @Self() readonly activatedUserService: ActivatedUserSelfService,
    @Self() readonly activatedPostService: ActivatedPostSelfService,
    @Self() readonly activatedPhotoService: ActivatedPhotoSelfService
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

  public changePhostoActivated(activatedUser: Photo) {
    this.activatedPhotoService.changeItemActivated(activatedUser);
  }

  private initData() {
    this.activatedUserService.initializeValues();
    this.activatedUserService.initializeListeners(activeSelector<User, ItemStateInterface<User>>("users"));
    this.activatedPostService.initializeValues();
    this.activatedPostService.initializeListeners(activeSelector<Post, ItemStateInterface<Post>>("posts"));
    this.activatedPhotoService.initializeValues();
    this.activatedPhotoService.initializeListeners(activeSelector<Photo, ItemStateInterface<Photo>>("photos"));
  }
}
