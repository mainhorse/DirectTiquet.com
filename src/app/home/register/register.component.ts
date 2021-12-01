import { Component, OnInit } from '@angular/core';
import {UsuarioModelo} from '../../modelo/modelo.usuario';
import {UsuarioService} from '../../servicios/usuario.service';
import Swal from 'sweetalert';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public usuarioRegistro : UsuarioModelo;
  
  constructor(
    private usuarioServicio : UsuarioService
  ) {

    this.usuarioRegistro = new UsuarioModelo('','','','','','',true);
   }

  ngOnInit(): void {
  }

  registrarUsuario(){
    this.usuarioServicio.Registro(this.usuarioRegistro).subscribe((res : any)=>{
      let respuesta = res.usuario;
      let mensaje = res.message;
       if(respuesta){
        Swal(mensaje);
       }else if(!respuesta){
        Swal(mensaje);
       }
    })
  }

}
