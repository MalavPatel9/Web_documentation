import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { AddsetService } from 'src/app/services/addset.service';
import {MatTableDataSource}from '@angular/material/table'



@Component({
  selector: 'app-sets',
  templateUrl: './sets.component.html',
  styleUrls: ['./sets.component.scss']
})
export class SetsComponent implements OnInit{
  Data=new Array<any>
  datasource= new MatTableDataSource()
  
  
  constructor(private router:Router,private addsetService:AddsetService){}
  @ViewChild(MatPaginator,{ static: true })
  paginator!: MatPaginator;
  
  ngOnInit(): void {
    this.Data= this.addsetService.getarr()
    this.datasource=new MatTableDataSource<any>(this.addsetService.arr)
    this.datasource.paginator=this.paginator
  }
  onclick(){
    this.router.navigate(['/home_1/addset'])
  }
  onEdit(i:number){
     
    // this.addsetService.getSetIdbyIndex(i)
    this.router.navigate(['/home_1/edit',i])

 }
 onDelete(i:number){
  this.Data.splice(i,1)
 }

  }


