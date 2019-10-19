// s1 creamos el servicio todo es para proteguer rutas

import { Injectable } from '@angular/core';
// s2
import { CanActivate } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class GuardAuthService implements CanActivate {

  constructor() { }

  canActivate(){
    //s3 si retorna true hay acceso
    // localstorage para ver si hay o no sesion probamos con f12 y colocamos info
    if(localStorage.getItem('sesion')){
      return true;
    }else{
      return false;
    }
   
  }

}
