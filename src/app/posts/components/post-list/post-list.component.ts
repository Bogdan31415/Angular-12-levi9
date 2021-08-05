import { Component, OnInit, Self } from '@angular/core';

import { Post } from "../../../shared/types/post.entity";
import { postsSelector } from "../../store/selectors";
import { PostSelfService } from "../../services/post-self.service";

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
    this.postService.initializeValues()
    this.postService.initializeListeners(postsSelector)
  }

  public changeActivated(post: Post) {
    this.postService.changePostActivated(post)
  }
}
