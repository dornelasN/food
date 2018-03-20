import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() displayTab = new EventEmitter<string>();
  // tabToBeDsiplayed = 'recipes'; // default

  onDisplayTab(tab: string) {
    this.displayTab.emit(tab);
  }
}
