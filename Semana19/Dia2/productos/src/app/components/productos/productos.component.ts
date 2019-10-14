import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductosService } from './../../services/productos.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


declare var $: any;
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})

export class ProductosComponent implements OnInit, OnDestroy {
  productos;
  susbscriptor: Subscription;

  ObjProducto = {
    prod_id: '',
    prod_nom: '',
    prod_desc: '',
    prod_prec: '',
    prod_img: '',
    prod_stock: ''
  }

  constructor(private _sProductos: ProductosService, private _sRouter: Router) { }

  ngOnInit() {
    this.traerProductos();
  }

  traerProductos() {
    this.susbscriptor = this._sProductos.getProductos().subscribe((resultado) => {
      this.productos = resultado;
    });
  }

  ngOnDestroy() {
    this.susbscriptor.unsubscribe();
  }

  crearProducto() {
    this._sRouter.navigate(['productos', 'crear']);
  }

  abrirModalEditar(id) {
    console.log("probando "+id);
    // usamos jquery, typescript no reconoce el signo $ de jquery, show para mostrar hide para ocultar
    // traer la factura dada su id
    Swal.fire({
      type: 'info',
      // title: 'Espere un momentooooooooooooooooo',
      // text: 'Esperando al servidor...',
      html: '<h2 class="display-4">Espere un momento</h2> <i class="fa fa-refresh fa-3x fa-spin"></i><br/> <p>Esperando al servidor...</p>',
      allowOutsideClick: false,
      showConfirmButton: false
    });


    // console.time("demoreishon");
    this._sProductos.getProductoById(id).subscribe((rpta) => {
      Swal.close();
      // console.timeEnd("demoreishon");
      console.log(rpta);
      if (rpta.prod_id) {

        // la factura existe y ya llego
        this.ObjProducto = rpta;
        console.log(this.ObjProducto);
        console.log(id);
        $("#modalEditar").modal("show");
      }
    })
  }

  guardarCambios() {
    // consumir el servicio para editar la factura
    this._sProductos.putProductoById(this.ObjProducto).subscribe((rpta) => {
      if (rpta.prod_id) {
        // factura correctamente editada
        // volvemos a actualizar la lista de facturas  this.traerFacturas();
        this.traerProductos();

        $("#modalEditar").modal("hide");
      }
    })

  }
}
