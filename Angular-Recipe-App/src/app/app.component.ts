import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RecipeMaker';
  loadedfeature = 'recipe';
  OnNavigate(feature: string) {
    this.loadedfeature = feature;
  }
}
