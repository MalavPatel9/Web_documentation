import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { AddsetService } from 'src/app/services/addset.service';
import { ActivatedRoute } from '@angular/router';
import { uniqueValidators } from 'src/unique.validators';


@Component({
  selector: 'app-addset',
  templateUrl: './addset.component.html',
  styleUrls: ['./addset.component.scss']
})
export class AddsetComponent implements OnInit{
  
  setId:any
  addForm!:FormGroup
  setName:string=''
  setValue:string=''
  isSubmitted: boolean = false;
  options:Array<any>=[];
  errormsg: any;
  optionsId: any=null;
  constructor(private router:Router, private addsetService:AddsetService, private route:ActivatedRoute){}
  ngOnInit(): void {
    this.setId= this.route.snapshot.paramMap.get('i') ?? 'new'
    let setConfig :any=this.addsetService.getSetIdbyIndex(this.setId)
    this.addForm = new FormGroup({
      setName:new FormControl(setConfig?.setName, [Validators.required],[uniqueValidators.setNameValidatorsAsync(this.addsetService,this.setId)]),
      setValue:new FormControl(setConfig?.setValue, [Validators.required]),
        });
    
    
   if(this.setId!='new') {
    let set=this.addsetService.getSetIdbyIndex(this.setId)
    this.options = setConfig?.setValue || []
    
    // this.addForm.patchValue({
    //   setName:set['setName'],
    //   setValue:set['setValue']
    // })
    delete this.addForm.controls['setName']?.errors?.['isDuplicate']
}else{

  }
  }

  onSubmit(){

    if(this.options.length===0){
       this.errormsg="set value required"
       this.addForm.invalid
       this.addForm.markAllAsTouched()
       
    }else{

    if (this.addForm.valid){
      let data1: any = this.addForm.value
      console.log(this.addsetService.findsetName(this.addForm.value.setName))
        if(this.setId!='new'){
          
        this.addsetService.updatesetData(this.setId,this.addForm.value)
             
      }else{
        this.addsetService.addsetData(data1);

      }
      this.router.navigate(['home_1/set']);
       }
       else{
        this.addForm.markAllAsTouched();
        this.isSubmitted = true;}}
  }

  onReset(){
    this.addForm.reset();
    this.router.navigate(['home_1/set'])
      }
   
     
  onAddOption(){
    if(this.setValue!==''){
      if(this.optionsId==null){
    this.options.push(this.setValue);}
    else{
      this.options[this.optionsId]=this.setValue
    }
     this.setValue ='';
     this.optionsId=null;
    this.addForm.controls['setValue'].setValue(this.options)
     }
    }   

    // clearvalidators(){
    // this.addForm.setErrors(null)
    // }
 editOption(i:number){
     
    this.setValue=this.options[i];
    // this.options.splice(i,1);
    this.optionsId=i
   
  }
  deleteoption(i:number){
   this.options.splice(i,1);
   this.addForm.controls['setValue'].reset()
  }  

}