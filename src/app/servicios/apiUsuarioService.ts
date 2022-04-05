import { HttpClient, HttpHeaders } from "@angular/common/http";
import { compileNgModuleDeclarationExpression } from "@angular/compiler/src/render3/r3_module_compiler";
import { Injectable } from "@angular/core";
import { BehaviorSubject, map, Observable } from "rxjs";
import { respuesta } from "../Models/Respuesta";
import { UserE } from "../Models/UsuarioE";

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
    private usuarioSubject: BehaviorSubject<UserE>;
    public usuario : Observable<UserE>;
    public get usuarioData(): UserE
    {
        return this.usuarioSubject.value;
    }
    constructor(private http: HttpClient){
        this.usuarioSubject = new BehaviorSubject<UserE>(JSON.parse(localStorage.getItem('usuario')!));
        this.usuario = this.usuarioSubject.asObservable();
    }
    Login(usuario : string, password: string):Observable<respuesta>{
        return this.http.post<respuesta>(this.url, {usuario, password}, httpOptions).pipe(
            map(res =>{
                if(res.exito == 1){
                    const user: UserE = res.data;
                    localStorage.setItem('usuario', JSON.stringify(user))
                    this.usuarioSubject.next(user);
                }
                return res;
            })
        )
    }
    LogOut(){
        localStorage.removeItem('usuario');
        this.usuarioSubject.next(null!);
    }
}