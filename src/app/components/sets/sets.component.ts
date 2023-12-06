import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddsetService } from 'src/app/services/addset.service';



@Component({
  selector: 'app-sets',
  templateUrl: './sets.component.html',
  styleUrls: ['./sets.component.scss']
})
export class SetsComponent implements OnInit{
  Data=new Array<any>
 
  
  constructor(private router:Router,private addsetService:AddsetService){}
  
  ngOnInit(): void {
    this.Data= this.addsetService.getarr()
console.log(this.Data);

  }
  onclick(){
    this.router.navigate(['/home_1/addset'])
  }
  onEdit(setName:any){

 }
  }


