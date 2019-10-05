import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs' // paso 6

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private carrito=new BehaviorSubject([]); //arreglo vacio
  carritoActual=this.carrito.asObservable();

  constructor() { }
  modificarCarrito(arregloProductos:Array<any>){
    this.carrito.next(arregloProductos) //next le pasamos algo
  }
}
