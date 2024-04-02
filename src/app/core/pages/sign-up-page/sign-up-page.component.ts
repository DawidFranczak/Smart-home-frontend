import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { iconPatch } from '../../constant/icons';
import { URLS } from '../../constant/urls'

import { TSignUpForm } from '../../../shered/types/TSignUpForm';

import { FormFieldComponent } from '../../../shered/component/form-field/form-field.component';
import { BackArrowComponent } from '../../../shered/component/back-arrow/back-arrow.component';

import { fetchData } from '../../services/api/fetchData';

@Component({
  selector: 'app-sign-up-page',
  standalone: true,
  imports: [FormFieldComponent, FormsModule, ReactiveFormsModule, BackArrowComponent],
  templateUrl: './sign-up-page.component.html',
  styleUrl: './sign-up-page.component.css'
})
export class SignUpPageComponent {

  constructor(
    private fetchData:fetchData,
    private router:Router
  ){}

  public iconPatch=iconPatch;
  public ERRORS:any;
  public successfulMessage?:string;

  signUpForm = new FormGroup({
    email: new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
    password2: new FormControl('',Validators.required),
    pin: new FormControl('',Validators.required),
  })

  getForm(event:any){
    console.log(event)
    let formName:string = event.target.name;
    let value:string = event.target.value
    if(formName)
      this.signUpForm.get(formName)?.setValue(value);
    console.log(this.signUpForm.value)
  }

  onSubmit(){
    const body: TSignUpForm = this.signUpForm.value as TSignUpForm;

    this.fetchData.fetchPost(URLS.registration,body,false).subscribe({
      next:() => this.successfullySignUp(),
      error:(error) => {this.ERRORS = error.error},
      complete:()=> Object.keys(this.ERRORS).forEach((key)=> this.ERRORS[key]='')
    })
  }

  private successfullySignUp(){
    this.successfulMessage="Rejestracja przebiegła pomyślnie. Za chwilę zostaniesz przekierowany na stronę logowania.";
    setTimeout(()=> this.router.navigate(['login']),1000)
  }
}
