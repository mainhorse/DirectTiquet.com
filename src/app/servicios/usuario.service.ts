import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url = 'http://localhost:3000/api/';

  constructor(
    private _http : HttpClient
  ) { }

  Registro(usuarioNuevo){
    let params = JSON.stringify(usuarioNuevo);
    let options = {
      headers : new HttpHeaders({'Content-Type' : 'application/json'})
    };
    return this._http.post(
      this.url + 'registro',
      params,
      options
    ).pipe(map(res => res));
  }

  validacionUsuario(validarUsuario){
    let params = JSON.stringify(validarUsuario);
    let options = {
      headers : new HttpHeaders({'Content-type' : 'application/json'})
    };
    return this._http.post(
      this.url + 'ingreso',
      params,
      options
    ).pipe(res => res)
  }


  actualizarDatos(id, datosUsuario){    let params = JSON.stringify(datosUsuario);
    let options = {
      headers : new HttpHeaders({'Content-type' : 'application/json'})
    };
    return this._http.put(
      this.url + 'actualizarDatos/' + id,
      params,
      options
    )
  }

  guardarSession(usuario){
    localStorage.setItem('sesion',usuario);
  }

}
