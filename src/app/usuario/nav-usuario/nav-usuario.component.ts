import { Component, OnInit } from '@angular/core';
import {UsuarioModelo} from '../../modelo/modelo.usuario';
import {UsuarioService} from '../../servicios/usuario.service';
import Swal from 'sweetalert';

@Component({
  selector: 'app-nav-usuario',
  templateUrl: './nav-usuario.component.html',
  styleUrls: ['./nav-usuario.component.css']
})
export class NavUsuarioComponent implements OnInit {
  public sesion : true;
  public sesionUsuario : UsuarioModelo;
  constructor(
    private _servicio : UsuarioService
  ) {
    this.sesionUsuario = new UsuarioModelo('','','','','','',true);
   }

  ngOnInit(): void {
    this.sesionUsuario =  JSON.parse(localStorage.getItem('sesion'));
  }
  
  car = '../assets/img/carritoCompras.png';
  imgUser = '../assets/img/usuario.png';
  count = 0;
  estado = 0;
  datos(){
    let form = document.getElementById('dataUser');
    if(this.estado == 0){
      form.style.transform = 'rotateX(0deg)';
      this.estado = 1;
    } else{
      form.style.transform = 'rotateX(90deg)';
      this.estado = 0;
    }

  }

  actualizarDatos(){
    this._servicio.actualizarDatos(this.sesionUsuario._id, this.sesionUsuario).subscribe((response : any)=>{
      let usuario = response.usuario;
      let mensaje = response.mensaje;
      if(!usuario){
        Swal(mensaje);
      }else{
        Swal(mensaje);
        localStorage.setItem('sesion', JSON.stringify(usuario));
      }
    })
  }

  cerrarSesion(){
    localStorage.clear();
  }

}
