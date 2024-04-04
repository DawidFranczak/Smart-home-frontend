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
    fetchGet(url: string, useAuth = true): Observable<any> {
        // Utwórz nagłówek z niestandardowym nagłówkiem
        let headers = new HttpHeaders();
    
        // Zmodyfikuj nagłówek User-Agent, aby uniknąć ostrzeżeń przeglądarki ngrok
        headers = headers.set('User-Agent', 'CustomBrowser');
    
        // Dodaj nagłówek autoryzacji, jeśli wymagany
        if (useAuth) {
          headers = headers.set('Authorization', this.auth.getToken());
        }
    
        // Wyślij żądanie HTTP z zmodyfikowanym nagłówkiem
        return this.http.get(url, { headers });
      }
    
    public fetchPost(url: string, body: any, useAutch=true){
        return this.http.post(url, body,{
                headers: {
                    "Authorization": useAutch ? this.auth.getToken():"",
                    "ngrok-skip-browser-warning": "69420"
                },
        })       
    }

    public fetchPut(url:string, body:any){
        return this.http.put(url, body,{
            headers: {
                "Authorization": this.auth.getToken(),
                "ngrok-skip-browser-warning":"value"
            },
        })     
    }
    
}