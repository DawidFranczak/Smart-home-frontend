import { Injectable } from "@angular/core";
import { Router } from "@angular/router";


@Injectable({
    providedIn: 'root'
})
export class Auth{

    constructor(
        private router:Router
    ){}

    private tokenName ="Token";

    public checkToken(){
        if(localStorage.getItem(this.tokenName) === null){
            this.router.navigate(['login']);
        }
    }

    public getToken() : string{
        return "Bearer " + localStorage.getItem(this.tokenName);
    }

    public setToken(token:string){
        localStorage.setItem("Token",token);
    }

    public clear(){
        localStorage.clear();
    }

}