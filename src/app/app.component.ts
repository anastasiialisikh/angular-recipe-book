import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentTab = 'recipes';

  onSelectCurrentTab(currentTab: string) {
    this.currentTab = currentTab;
  }
}
