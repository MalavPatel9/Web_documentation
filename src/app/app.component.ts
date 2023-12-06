import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'web_documentation';
  isLoggedIn = false;

   constructor() {
      localStorage.setItem('isloggedIn', 'false')
   }

   ngOnInit() {
     
   }
}
