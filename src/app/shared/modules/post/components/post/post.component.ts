import { Component, Input, OnInit } from '@angular/core';
import { Post } from "../../../../types/post.entity";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  public isActive$: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  public deactivate(post: Post) {

  }

  public activate(post: Post) {

  }
}
