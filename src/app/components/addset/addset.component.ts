import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { AddsetService } from 'src/app/services/addset.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addset',
  templateUrl: './addset.component.html',
  styleUrls: ['./addset.component.scss']
})
export class AddsetComponent implements OnInit{
  
  setId:any
  addForm!:FormGroup
  setName:any
  setValue:any
  isSubmitted: boolean = false;
  constructor(private router:Router, private addsetService:AddsetService, private route:ActivatedRoute){}
  ngOnInit(): void {
    this.addForm = new FormGroup({
      setName:new FormControl('', [Validators.required, Validators.maxLength(50)]),
      setValue:new FormControl('', [Validators.required, Validators.maxLength(50)])
    });
    
   this.setId= this.route.snapshot.paramMap.get('i') ?? 'new'
    
   if(this.setId!='new'){
    console.log(this.setId);
    
    let set=this.addsetService.getSetIdbyIndex(this.setId)
    console.log(set);
   
    
    this.addForm.patchValue({
      setName:set['setName'],
      setValue:set['setValue']
    })

  
     
  }
  }

  onSubmit(){
    if (this.addForm.valid){
      let data1: any = this.addForm.value
      console.log(this.addForm.value);
      if(this.setId!='new'){
        this.addsetService.updatesetData(this.setId,this.addForm.value)
        
      }else{
        this.addsetService.addsetData(data1);

      }
      this.router.navigate(['home_1/set']);
       }
       else{
        this.addForm.markAllAsTouched();
        this.isSubmitted = true;}
  }

  onReset(){
    this.addForm.reset();
      }

}
