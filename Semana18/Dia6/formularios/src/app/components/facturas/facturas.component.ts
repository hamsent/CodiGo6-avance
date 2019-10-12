import { Component, OnInit, OnDestroy } from '@angular/core';
import { FacturasService } from './../../services/facturas.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

// para que typescript reconozca el singo $ de jquery
declare var $: any;

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css']
})
export class FacturasComponent implements OnInit, OnDestroy {
  facturas;
  subscriptor: Subscription;
  objFactura = {
    // creamos este objeto para el formulario del modal
    id: '',
    fact_nro: '',
    fact_rz: '',
    fact_fech: '',
    fact_ruc: ''
  }

  // paso 2
  facturasSeleccionadas: Array<any> = [];


  constructor(private _sFacturas: FacturasService,
    private _sRouter: Router) { }

  ngOnInit() {
    this.traerFacturas();
  }

  traerFacturas() {
    this.subscriptor = this._sFacturas.getFacturas().subscribe((resultado) => {
      this.facturas = resultado;
    })
  }

  ngOnDestroy() {
    this.subscriptor.unsubscribe();
  }

  crearFactura() {
    this._sRouter.navigate(['facturas', 'crear']);
  }


  eliminarFactura(id) {
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
        this._sFacturas.deleteFactura(id).subscribe((rpta) => {

          // si la rsta tiene un id, quiere decir que fue completamente borrado
          if (rpta.id) {
            Swal.fire({
              position: 'top-end',
              type: 'success',
              title: 'La factura ha sido borrada con éxito',
              showConfirmButton: false,
              timer: 1500

            })
            // luego llamamos a la funcion para volver a cargar el component
            this.traerFacturas();
          }
        })
      }
    })

  }

  abrirModalEditar(id) {
    // usamos jquery, typescript no reconoce el signo $ de jquery, show para mostrar hide para ocultar
    // traer la factura dada su id
    Swal.fire({
      type: 'info',
      // title: 'Espere un momentooooooooooooooooo',
      // text: 'Esperando al servidor...',
      html: '<h2 class="display-4">Espere un momento</h2> <i class="fa fa-refresh fa-3x fa-spin"></i><br/> <p>Esperando al servidor...</p>',
      allowOutsideClick: false,
      showConfirmButton: false
    })


    console.time("demoreishon");
    this._sFacturas.getFacturaById(id).subscribe((rpta) => {
      Swal.close();
      console.timeEnd("demoreishon");
      if (rpta.id) {

        // la factura existe y ya llego
        this.objFactura = rpta;
        $("#modalEditar").modal("show");
      }
    })





  }

  guardarCambios() {
    // consumir el servicio para editar la factura
    this._sFacturas.putFacturaById(this.objFactura).subscribe((rpta) => {
      if (rpta.id) {
        // factura correctamente editada
        // volvemos a actualizar la lista de facturas  this.traerFacturas();
        this.traerFacturas();

        $("#modalEditar").modal("hide");
      }
    })

  }

  // paso 3
  seleccionarFactura(evento, factura) {
    // si esque mi checkboc esta seleccionado haremos algo
    if (evento.target.checked) {
      this.facturasSeleccionadas.push(factura);
      console.log(this.facturasSeleccionadas);
    }else{
      for (let i = 0; i < this.facturasSeleccionadas.length; i++) {
        if (factura.id===this.facturasSeleccionadas[i].id) {
          // array.splice(posicion,cont_elementos);
          this.facturasSeleccionadas.splice(i,1);
          console.log(this.facturasSeleccionadas);
        }
        
      }
    }
  }

  // paso 7

  eliminarFacturas(){
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
        
        this._sFacturas.deleteFacturas(this.facturasSeleccionadas).subscribe((rpta) => {

          // si la rsta tiene un id, quiere decir que fue completamente borrado
          if (rpta[0].id) {
            Swal.fire({
              position: 'top-end',
              type: 'success',
              title: 'Las facturas han sido borrada con éxito',
              showConfirmButton: false,
              timer: 1500

            })
            // luego llamamos a la funcion para volver a cargar el component
            this.traerFacturas();
          }
          console.log(rpta);
        })
      }
    })

  }
}