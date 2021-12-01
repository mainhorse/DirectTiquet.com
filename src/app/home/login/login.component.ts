import { Component, OnInit } from '@angular/core';
import {UsuarioModelo} from '../../modelo/modelo.usuario';
import {UsuarioService} from '../../servicios/usuario.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public usuarioLogin : UsuarioModelo;
  constructor(
    public _service : UsuarioService,
    public _route : Router
  ) {
    this.usuarioLogin = new UsuarioModelo('','','','','','',true);
   }

  ngOnInit(): void {
  }

  validarUsuario(){
    this._service.validacionUsuario(this.usuarioLogin).subscribe((response : any)=>{
      let usuario = response.usuario;
      let mensaje = response.mensaje;
      if(response){
        if(usuario.estado){
        Swal(mensaje);
        this._service.guardarSession(JSON.stringify(usuario));
        this._route.navigate(['/usuario']);  
        }else{
          console.log(usuario.estado);
          Swal('Usuario bloquiado, porfavor enviar un correo de verificación');
        }      
      } else if(!response){
        Swal(mensaje)
      }
    }, err=>{
      if(err != null){
        console.log(err);
      }
    })
  }

}
