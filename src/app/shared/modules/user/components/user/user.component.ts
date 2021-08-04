import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from "../../../../types/user.entity";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  @Input() user: User;
  @Output() onClick = new EventEmitter<User>();


  public deactivate(user: User) {
    this.onClick.emit(user);

  }

  public activate(user: User) {
    this.onClick.emit(user)
  }
}
