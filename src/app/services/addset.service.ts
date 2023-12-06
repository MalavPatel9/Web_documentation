
import { Injectable } from '@angular/core';
import { Data } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AddsetService {
  arr:Data[]=[];
  constructor() { }
  addsetData(addForm:any){
  this.arr.push(addForm)
  console.log(this.arr)
  }

  getarr(){
    let list=this.arr
    return list
  }
}
