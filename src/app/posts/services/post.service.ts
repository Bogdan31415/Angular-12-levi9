import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { Post } from "../../shared/types/post.entity";
import { environment } from "../../../environments/environment";

@Injectable()
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    const url = environment.apiUrl + 'posts?_limit=9';
    return this.http.get<Post[]>(url).pipe(
      map(postsArr => postsArr.map(post => ({ ...post, isActive: false }))),
    );
  }

}
