import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { ApiUsuarioService } from "../servicios/apiUsuarioService";

@Injectable({
    providedIn: 'root'
})

export class Guard implements CanActivate{
    constructor(private ruta: Router,
                private apiUser: ApiUsuarioService){

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const usuario = this.apiUser.usuarioData;
        if(usuario){
            return true;
        }
        this.ruta.navigate(['/login']);
        return false;
    }
}