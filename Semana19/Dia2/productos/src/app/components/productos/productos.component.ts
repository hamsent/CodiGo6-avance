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

  productosSeleccionadas: Array<any> = [];
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

  eliminarProducto(id) {
    Swal.fire({
      title: 'Estas seguro de Eliminar?',
      text: 'El proceso no tiene vuelta atrás!!!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'No, Cancelar!',
      confirmButtonText: 'Si, borrar'
    }).then((result) => {
      if (result.value) {
        console.log(`Elimando el id ${id}`);
        this._sProductos.deleteProducto(id).subscribe((rpta) => {
          console.log(`Elimando asfsdfsael id ${id}`);
          // si la rsta tiene un id, quiere decir que fue completamente borrado
          if (rpta.prod_id) {
            Swal.fire({
              position: 'top-end',
              type: 'success',
              title: 'La factura ha sido borrada con éxito',
              showConfirmButton: false,
              timer: 1500

            })
            // luego llamamos a la funcion para volver a cargar el component
            this.traerProductos();
          }
        })
      }
    })

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


  seleccionarProducto(evento, producto) {
    // si esque mi checkboc esta seleccionado haremos algo
    if (evento.target.checked) {
      this.productosSeleccionadas.push(producto);
      console.log(this.productosSeleccionadas);
    } else { 
      for (let i = 0; i < this.productosSeleccionadas.length; i++) {
        if (producto.id === this.productosSeleccionadas[i].id) {
          // array.splice(posicion,cont_elementos);
          this.productosSeleccionadas.splice(i, 1);
          console.log(this.productosSeleccionadas);
        }
      }
    }
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

  eliminarProductos(){
    console.log("eliminarProductos", this.productosSeleccionadas)
    Swal.fire({
      title: 'Estas seguro de cargarse estas facturas',
      text: 'El proceso no tiene vuelta atrás!!!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'No, Cancelar!',
      confirmButtonText: 'Si, borrar'
    }).then((result) => {
      if (result.value) {
        
        this._sProductos.deleteProductos(this.productosSeleccionadas).subscribe((rpta) => {

          // si la rsta tiene un id, quiere decir que fue completamente borrado
          if (rpta[0].prod_id) {
            Swal.fire({
              position: 'top-end',
              type: 'success',
              title: 'Las facturas han sido borrada con éxito',
              showConfirmButton: false,
              timer: 1500

            })
            // luego llamamos a la funcion para volver a cargar el component
            this.traerProductos();
          }
          console.log(rpta);
        })
      }
    })

  }
}
