import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { AddsetService } from 'src/app/services/addset.service';

@Component({
  selector: 'app-addset',
  templateUrl: './addset.component.html',
  styleUrls: ['./addset.component.scss']
})
export class AddsetComponent implements OnInit{
  
  addForm!:FormGroup
  setName:any
  setValue:any
  isSubmitted: boolean = false;
  constructor(private router:Router, private addsetService:AddsetService){}
  ngOnInit(): void {
    this.addForm = new FormGroup({
      setName:new FormControl('', [Validators.required, Validators.maxLength(50)]),
      setValue:new FormControl('', [Validators.required, Validators.maxLength(50)])
    })
  }

  onSubmit(){
    if (this.addForm.valid){
      let data1: any = this.addForm.value
      console.log(this.addForm.value);
      this.addsetService.addsetData(data1);

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
