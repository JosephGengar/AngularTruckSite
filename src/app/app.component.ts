import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserE } from './Models/UsuarioE';
import { ApiUsuarioService } from './servicios/apiUsuarioService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  usuarioapp: UserE = {email: ''};
  constructor(private apiUsuario: ApiUsuarioService,
              private route: Router){
                this.apiUsuario.usuario.subscribe(res =>{
                  this.usuarioapp = res;
                  console.log('el usuario es: ' + res);
                })
  }
  logOutApp(){
    this.apiUsuario.LogOut();
  }

}

