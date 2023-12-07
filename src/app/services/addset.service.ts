
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

  updatesetData(id:number,addForm:any){
     this.arr.splice(id,1,addForm)
  }

  getarr(){
    let list=this.arr
    return list
  }
  
  getSetIdbyIndex(i:number){
    return this.arr[i]
  }
   
  


}
