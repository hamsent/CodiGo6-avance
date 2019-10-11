import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'// para conectarse con el exterior
import { promise } from 'protractor';
import { resolve } from 'dns';
import { reject } from 'q';
import { Observable } from 'rxjs';
import { URL_BACKEND} from './../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class FacturasService {

  // facturas=['a','b','c'];
  constructor(private _sHttp:HttpClient) { }
  getFacturas():Observable<any>{
    // return new Promise((resolve,reject)=>{
    //   setTimeout(() => {
    //     resolve(this.facturas);
    //   }, 2000);
    // });
    return this._sHttp.get(`${URL_BACKEND}/facturas`);
  }

  postFacturas(objFactura): Observable<any>{
// colocar arriva HttpHeaders
    let objFacturaString=JSON.stringify(objFactura);
    // creando headers
    let misHeaders=new HttpHeaders().set("Content-Type", "application/json");
    return this._sHttp.post(`${URL_BACKEND}/facturas`,objFacturaString,{headers: misHeaders});
                        
  }
}
