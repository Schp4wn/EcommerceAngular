import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  @Input() sitename: string;
  isCollapsed: boolean = false;

  toggleCollapseNavbar() {
    this.isCollapsed = !this.isCollapsed;
    /*if (this.isCollapsed) {
      this.isCollapsed = false;
    } else {
      this.isCollapsed = true;
    }*/
  }
}
