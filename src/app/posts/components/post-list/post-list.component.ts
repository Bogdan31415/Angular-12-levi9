import { Component, OnInit, Self } from '@angular/core';

import { Post } from "../../../shared/types/post.entity";
import { PostSelfService } from "../../services/post-self.service";
import { itemsSelector } from "../../../shared/store/selectors";
import { ItemStateInterface } from "../../../shared/types/app-state.interface";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  providers: [PostSelfService]
})
export class PostListComponent implements OnInit {

  constructor(@Self() readonly postService: PostSelfService) { }

  ngOnInit(): void {
      this.postService.fetchData();
      this.postService.initializeValues();
      this.postService.initializeListeners(itemsSelector<Post, ItemStateInterface<Post>>("posts"));
  }

  public changeActivated(post: Post) {
    this.postService.changeItemActivated(post);
  }
}
