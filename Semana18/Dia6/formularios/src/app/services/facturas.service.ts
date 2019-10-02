import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'// para conectarse con el exterior
import { promise } from 'protractor';
import { resolve } from 'dns';
import { reject } from 'q';
import { Observable } from 'rxjs';

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
    return this._sHttp.get("https://5d4b6ade00dbb10014879b1b.mockapi.io/facturas")
  }
}
