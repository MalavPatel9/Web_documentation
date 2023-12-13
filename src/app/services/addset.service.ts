
import { Injectable } from '@angular/core';
import { Data } from './chart.service';

@Injectable({
  providedIn: 'root'
})
export class AddsetService {
  arr:Data[]=[];
  constructor() { }
  addsetData(addForm:any){
  this.arr.push(addForm)

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

findsetName(setNam:string){
// let result = this.arr.findIndex((obj:any)=>obj.setName===setNam)
// console.log(result);
// if(result!==-1){

// }
  return this.arr.some((obj:any)=>obj.setName === setNam)
}
  
findsetIDandName(setName:string,setId:number){
  // let ind=this.arr.findIndex((obj:any)=>obj.setName===setName) 
  // console.log(ind ,"findindex");
  
  // let result= this.arr.some((obj:any)=>obj.setName===setName)
  // if(result&&ind>=0&&ind!==setId){
  // console.log(result,"resultfrom findsetIDandName",setId,this.arr)

  let res=this.arr.findIndex((x: any, i: number) => x.setName == setName && i != setId) > -1
   console.log(res, "get setidandname",setId);
   return res

  // }
  // return false
}
}
