import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDrawer } from "@angular/material/sidenav";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() sidenav: MatDrawer | undefined;
  @Output() sidenavToggle = new EventEmitter();
  public pageName: string = "levi9";

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }
}
