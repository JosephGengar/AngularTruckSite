import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { Guard } from './security/Guard';

const routes: Routes = [
  {path: 'home', component: HomeComponent, canActivate: [Guard]},
  {path: '', redirectTo:'/home', pathMatch:'full'},
  {path: 'clientes', component: ClientesComponent, canActivate: [Guard]},
  {path: 'login', component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
