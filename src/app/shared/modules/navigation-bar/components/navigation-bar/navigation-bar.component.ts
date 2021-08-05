import { Component, EventEmitter, Output } from '@angular/core';
import { PAGES } from "./config/navigation.config";
import { animateText, onSideNavChange } from "../../../../animation/menu-animation";

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
  animations: [animateText, onSideNavChange]
})
export class NavigationBarComponent {
  @Output() public sidenavToggle = new EventEmitter();

  public pages = PAGES
  public linkText: boolean = true;


  public onSinenavToggle() {
    this.linkText = !this.linkText;
    this.sidenavToggle.emit(this.linkText);
  }

}
