import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss']
})
export class AdministrationComponent {

  Administration="Administration"
       constructor(private router:Router){}
  onclick(){
    this.router.navigate(['home_1/set'])
  }

}
