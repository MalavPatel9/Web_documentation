import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup;
  returnUrl!: string;
  previosUrl!: string;
  isSubmitted: boolean = false;
  showChangePasswordConfirm: boolean = true;
  showPassword: boolean = false;
  loggedIn: boolean = false;
  username: any;
  password: any;
  
  

  constructor(private router:Router ){}
  ngOnInit() {
    this.initializeForm();
    
  }

  initializeForm() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])
    });
  }
  onSubmit(data:any,username:string,password:string) {
    if(username =='malav' && password=='Malav@1234'){
      localStorage.setItem('isloggedIn', 'true')
    }else{
      localStorage.setItem('isloggedIn', 'false')
    }
      
      if (this.loginForm.valid){
        this.router.navigate(['home_1/home']);
        
     }
 else{
     this.loginForm.markAllAsTouched();
     this.isSubmitted = true;}
 }
 public togglePasswordVisibility(): void {
   this.showPassword = !this.showPassword;
 }


   }
    


