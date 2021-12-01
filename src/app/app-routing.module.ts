import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home/home.component';
import {HomeOptionsUserComponent} from './home/home-options-user/home-options-user.component';
import {HomeRegisterComponent} from './home/home-register/home-register.component';
import {HomeLoginComponent} from './home/home-login/home-login.component';
import {UsuarioPageComponent} from './usuario/usuario-page/usuario-page.component';


const routes: Routes = [
  {path: '', component : HomeComponent},
  {path: 'opciones', component : HomeOptionsUserComponent},
  {path: 'registro', component : HomeRegisterComponent},
  {path: 'ingreso', component : HomeLoginComponent},
  {path: 'usuario', component : UsuarioPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
