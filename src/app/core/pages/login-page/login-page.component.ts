import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, FormsModule, Validators} from '@angular/forms'
import { RouterLink, Router } from '@angular/router';



import { iconPatch } from '../../constant/icons'
import { URLS } from '../../constant/urls'

import { fetchData } from '../../services/api/fetchData';
import { Auth } from '../../services/auth/auth';

import { TLoginForm } from '../../../shered/types/TLoginForm';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent{

  public message:string = '';
  public icons = iconPatch;

  loginForm = new FormGroup({
    email: new FormControl('',[Validators.email,Validators.required,Validators.nullValidator]),
    pin: new FormControl(null,[Validators.pattern('[0-9]+'),Validators.required]),
  });

  constructor(
    private auth:Auth,
    private fetch:fetchData,
    private router:Router
  ){}

  public validatePinInput(event:any){
    event.target.value = event.target.value.replace(/\D/g, '');
    this.loginForm.value.pin = event.target.value.toString();
  }

  public sendData(){
    const body: TLoginForm = this.loginForm.value as TLoginForm;
    console.log(body)
    console.log(URLS.login)
    this.fetch.fetchPost(URLS.login, body, false).subscribe({
      next:(res) => this.successfullyLogin(res),
      error:(res) => this.customErrorHandler(res),
      complete:()=>{this.message='';}
    });
  }

  private customErrorHandler(res:any){
    console.log(res)
    switch(res.status){
      case 0:
        this.message = "Serwer jest wyłączony";
        break;

      default:
        this.message = res.error.message;
        break;
    }
  }

  private successfullyLogin(res:any){
    this.auth.setToken(res.token);
    this.router.navigate(['home']);
  }

}
