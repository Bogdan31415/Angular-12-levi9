import { Component } from '@angular/core';
import { onMainContentChange } from "./shared/animation/menu-animation";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [onMainContentChange]
})
export class AppComponent {
  onSideNavChange: boolean = true;

  changeSideNave() {
    this.onSideNavChange = !this.onSideNavChange;
  }
}
