import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiUsuarioService } from '../servicios/apiUsuarioService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public usuario: string = "";
  public password: string = "";

  constructor(private apiUsuario: ApiUsuarioService,
              public route: Router) { 
                if(this.apiUsuario.usuarioData){
                  this.route.navigate(["/"]);
                }
              }

  ngOnInit(): void {
  }

  logueo(){
    this.apiUsuario.Login(this.usuario, this.password).subscribe(res => {
      if(res.exito == 1){
        this.route.navigate(["/"]);
      }     
    })

  }
}
