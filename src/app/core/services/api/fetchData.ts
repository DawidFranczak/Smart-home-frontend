import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Auth } from "../auth/auth";
import { error } from "console";


@Injectable({
    providedIn: 'root'
})
export class fetchData{

    constructor(
        private auth: Auth,
        private http: HttpClient,

    ){}

    public fetchGet(url:string, useAutch=true){
        return this.http.get(url,{
            headers: {
                "Authorization": useAutch ? this.auth.getToken():""
            }
        })
    }
    
    public fetchPost(url: string, body: any, useAutch=true){
        return this.http.post(url, body,{
                headers: {
                    "Authorization": useAutch ? this.auth.getToken():""
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
    
}