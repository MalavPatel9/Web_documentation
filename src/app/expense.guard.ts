import { inject } from '@angular/core';
import {  Router, CanActivateFn } from '@angular/router';


export const ExpenseGuard:CanActivateFn =(route, state) =>{
   let _router=inject(Router)
   let isLoggedIn=localStorage.getItem('isloggedIn');
   if(isLoggedIn=='false'){
    alert('Invalid Username or Password')
    _router.navigate(['/login'])
    return false
   }
   return true;
}