import { Component } from '@angular/core';

import { ChartService, Task,  } from '../services/chart.service';


@Component({
  selector: 'app-spline',
  templateUrl: './spline.component.html',
  styleUrls: ['./spline.component.scss']
})
export class SplineComponent {
 
  dataSource: Task[];
  constructor(private Chartservice: ChartService) {
    this.dataSource = this.Chartservice.getTask();
  }
}



