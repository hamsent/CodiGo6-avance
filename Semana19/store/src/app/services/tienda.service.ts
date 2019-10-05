import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TiendaService {

  constructor(private _sHttp: HttpClient) { }

  getProductos(): Observable<any> {
    return this._sHttp.get('https://5d4b6ade00dbb10014879b1b.mockapi.io/productos');
  }
  //algo
}
