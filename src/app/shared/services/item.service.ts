import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { environment } from "../../../environments/environment";
import { map } from "rxjs/operators";

@Injectable()
export class ItemService<T> {
  private _type: string

  constructor(private http: HttpClient) { }

  public getItems(): Observable<T[]> {
    const url = environment.apiUrl + `${this._type}?_limit=9`;
    return this.http.get<T[]>(url).pipe(
      map(itemArr => itemArr.map(item => ({ ...item, isActive: false }))),
    );
  }

  public set type(value: string) {
    this._type = value;
  }

  public get type(): string {
    return this._type;
  }
}
