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

export class ApiClienteService{
    url: string =  'https://localhost:44337/api/Cliente';

    constructor(private http: HttpClient){

    }
    ObtenerClientes(): Observable<respuesta>{
        return this.http.get<respuesta>(this.url);
    }

}