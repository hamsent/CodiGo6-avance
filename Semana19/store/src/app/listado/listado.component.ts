import { Component, OnInit, OnDestroy} from '@angular/core';
import { TiendaService } from '../services/tienda.service';
import { Subscription } from 'rxjs';
import {CarritoService} from '../services/carrito.service';// paso 7

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit, OnDestroy {
  subscripcion: Subscription;
  productos: any;

  // paso 8
  subsCarrito:Subscription;
  miCarrito:any;



  constructor(private _sTienda: TiendaService,
    private _sCarrito: CarritoService) { } //paso 8

  ngOnInit() {
    this.subscripcion = this._sTienda.getProductos().subscribe((datos) => {
      this.productos = datos;
    });
    // paso 9
    this.subsCarrito=this._sCarrito.carritoActual.subscribe(datosProductos=>{
      this.miCarrito=datosProductos;
    });
  }

  // paso 11
anadirProducto(producto:any){
  this.miCarrito.push(producto);
  this._sCarrito.modificarCarrito(this.miCarrito);
  console.log(this.miCarrito);
}

  ngOnDestroy(){
    this.subscripcion.unsubscribe();
  }


}
