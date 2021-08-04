import { Component, Input } from '@angular/core';

import { User } from "../../../../types/user.entity";
import { BaseCardComponent } from "../../../components/base-card.component";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent extends BaseCardComponent<User>{
  @Input() user: User;

}
