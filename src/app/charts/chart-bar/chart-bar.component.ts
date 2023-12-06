import { Component } from '@angular/core';
import { ChartService,Data } from 'src/app/services/chart.service';

@Component({
  selector: 'app-chart-bar',
  templateUrl: './chart-bar.component.html',
  styleUrls: ['./chart-bar.component.scss']
})
export class ChartBarComponent {

  dataSource: Data[] ; 

  constructor(private Chartservice:ChartService){
    this.dataSource= this.Chartservice.getData()
  }

}
