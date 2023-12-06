import { Component, OnInit } from '@angular/core'
import { ChartService,Data } from 'src/app/services/chart.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pending: any;
  upcoming: any;
  draft: any;
  ovedue: any;
  dataSource: any[];

 constructor(public Chartservice:ChartService) {
  this.dataSource= this.Chartservice.getData()
}
  ngOnInit(): void {
    }

}
