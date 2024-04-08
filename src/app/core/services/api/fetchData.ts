import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Auth } from "../auth/auth";
import { error } from "console";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class fetchData{

    constructor(
        private auth: Auth,
        private http: HttpClient,

    ){}

    public fetchGet(url: string, useAuth = true): Observable<any> {
        return this.http.get(url,{
            headers: {
                "Authorization": useAuth ? this.auth.getToken():"",
            },
    });
      }
    
    public fetchPost(url: string, body: any, useAuth=true){
        return this.http.post(url, body,{
                headers: {
                    "Authorization": useAuth ? this.auth.getToken():"",
                },
        })       
    }

    public fetchPut(url:string, body:any){
        return this.http.put(url, body,{
            headers: {
                "Authorization": this.auth.getToken(),
            },
        })     
    }

    public fetchDelete(url:string){
        return this.http.delete(url,{
            headers: {
                "Authorization": this.auth.getToken(),
            },
        }) 
    }
    
}