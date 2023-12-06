import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(private router:Router){}
  onclick(){
    this.router.navigate(['/home_1/home'])

  }
  onclick1(){
    this.router.navigate(['/home_1/space'])

  }

  onclick2(){
    this.router.navigate(['/home_1/search'])

  }

  onclick3(){
    this.router.navigate(['/home_1/schedule'])
  }

  onclick4(){
    this.router.navigate(['/home_1/tasks'])
  }

  onclick5(){
    this.router.navigate(['/home_1/import'])
  }

  onclick6(){
    this.router.navigate(['/home_1/smart-workflow'])
  }

  onclick7(){
    this.router.navigate(['/home_1/activity-summary'])
  }

  onclick8(){
    this.router.navigate(['/home_1/report-dashboard'])
  }

  onclick9(){
    this.router.navigate(['/home_1/administration'])
  }
}
