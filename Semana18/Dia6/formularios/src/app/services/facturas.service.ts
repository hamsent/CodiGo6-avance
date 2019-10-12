import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'// para conectarse con el exterior
import { promise } from 'protractor';
import { resolve } from 'dns';
import { reject } from 'q';
import { Observable } from 'rxjs';
import { URL_BACKEND } from './../../environments/environment.prod';
// paso 4
// varias acciones http
import { forkJoin } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FacturasService {

// paso 6
  arregoRespuestas: Array<any>=[];


  // facturas=['a','b','c'];
  constructor(private _sHttp: HttpClient) { }
  getFacturas(): Observable<any> {
    // return new Promise((resolve,reject)=>{
    //   setTimeout(() => {
    //     resolve(this.facturas);
    //   }, 2000);
    // });
    return this._sHttp.get(`${URL_BACKEND}/facturas`);
  }

  postFacturas(objFactura): Observable<any> {
    // colocar arriva HttpHeaders
    let objFacturaString = JSON.stringify(objFactura);
    // creando headers
    let misHeaders = new HttpHeaders().set("Content-Type", "application/json");
    return this._sHttp.post(`${URL_BACKEND}/facturas`, objFacturaString, { headers: misHeaders });

  }
  deleteFactura(id): Observable<any> {
    return this._sHttp.delete(`${URL_BACKEND}/facturas/${id}`);
  }
  getFacturaById(id): Observable<any> {
    // funcion para obtener datos de un solo objeto
    return this._sHttp.get(`${URL_BACKEND}/facturas/${id}`);
  }

  putFacturaById(objFactura): Observable<any> {
    // para actualizar la informacion editada

    let objFacturaString = JSON.stringify(objFactura);
    let misHeaders = new HttpHeaders().set("Content-type", "application/json");

    return this._sHttp.put(`${URL_BACKEND}/facturas/${objFactura.id}`, objFacturaString, { headers: misHeaders });
  }

  // paso 5 crear el metodo
  deleteFacturas(arregloFacturas): Observable<any> {
    arregloFacturas.forEach(factura => {
      const respuesta = this._sHttp.delete(`${URL_BACKEND}/facturas/${factura.id}`);
    
    this.arregloRespuestas.push(respuesta);
    });
    return forkJoin(this.arregloRespuestas);  }
}
