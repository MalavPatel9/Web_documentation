import { AbstractControl, AsyncValidator, AsyncValidatorFn, ValidationErrors, ValidatorFn } from '@angular/forms'
import { AddsetService } from './app/services/addset.service';
import { Observable, of } from 'rxjs';




export class uniqueValidators {

    // _addsetService !: AddsetService;
   
        // this._addsetService = addsetService;
    

    // static setNameValidators(control: AbstractControl):ValidationErrors|null{
    
    //     let value = control.value || '';
    //     let msg = '';
    //     if (!value) {
    //         return null;
    //     };
    //     // const isDuplicate = this.addsetService.findsetName(value)
    //     return {isDuplicate : false}
    // }
    
    static setNameValidatorsAsync(addsetService:AddsetService,setId:any) : AsyncValidatorFn {
       return (control: AbstractControl):Observable<ValidationErrors|null> =>{
            let value = control.value || '';
            let msg = '';
            if (!value) {
                return of(null);
            }else if(setId!='new'){
                 const isDuplicate = addsetService.findsetIDandName(value,setId)
                 console.log(isDuplicate)
                return  isDuplicate ? of({ "isDuplicate" : isDuplicate}) : of(null)
            }
            const isDuplicate = addsetService.findsetName(value)
            return isDuplicate ? of({ "isDuplicate" : isDuplicate}) : of(null)
        }
    }
}