import { Component } from '@angular/core';
import { HrComponent } from './hr/hr.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HMT';


  public showNavBar = true;

toggleNavBar(component) {
   if(component instanceof HrComponent) {
      this.showNavBar = true;
   } else {
      this.showNavBar = false;
   }
}
}
