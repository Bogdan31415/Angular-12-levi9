import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { environment } from "../../../environments/environment";
import { User } from "../../shared/types/user.entity";
import { map } from "rxjs/operators";

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  getUser(): Observable<User[]> {
    const url = environment.apiUrl + 'users?_limit=9';
    return this.http.get<User[]>(url).pipe(
      map(usersArr => usersArr.map(user => ({ ...user, isActive: false}))),
    );
  }
}
