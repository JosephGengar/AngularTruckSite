import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Cliente } from "../Models/Cliente";
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
    AgregarClientes(cliente: Cliente):Observable<respuesta>{
        return this.http.post<respuesta>(this.url, cliente, httpOptions)
    }
    EditarClientes(cliente: Cliente):Observable<respuesta>{
        return this.http.put<respuesta>(this.url, cliente, httpOptions)
    }
    BorrarClientes(id: number):Observable<respuesta>{
        return this.http.delete<respuesta>(`${this.url}/${id}`, httpOptions)
    }

}