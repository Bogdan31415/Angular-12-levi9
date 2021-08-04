import { Component, Input } from '@angular/core';

import { Post } from "../../../../types/post.entity";
import { BaseCardComponent } from "../../../components/base-card.component";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent extends BaseCardComponent<Post>{
  @Input() post: Post;

}
