import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { respuesta } from "../Models/Respuesta";

const httpOptions = {
    headers: new HttpHeaders({
        'Contend-Type': 'application/json'
    })
};

@Injectable({
    providedIn: 'root',
})

export class ApiUsuarioService{
    url: string = 'https://localhost:44337/api/Usuario';

    constructor(private http: HttpClient){

    }
    Login(usuario : string, password: string):Observable<respuesta>{
        return this.http.post<respuesta>(this.url, {usuario, password}, httpOptions);
    }
}