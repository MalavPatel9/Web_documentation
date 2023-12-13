import { Component } from '@angular/core';
import { AddsetService } from 'src/app/services/addset.service';

@Component({
  selector: 'app-setlist',
  templateUrl: './setlist.component.html',
  styleUrls: ['./setlist.component.scss']
})
export class SetlistComponent {
  Data:any[]=[]

  constructor(private addsetService:AddsetService){}

  ngOnInit(): void {
    this.Data= this.addsetService.getarr()


  }
}
