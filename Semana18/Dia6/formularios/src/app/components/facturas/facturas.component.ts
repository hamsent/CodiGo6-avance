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
  objFactura={
    // creamos este objeto para el formulario del modal
    id: '',
    fact_nro: '',
    fact_rz: '',
    fact_fech: '',
    fact_ruc: ''
  }

  constructor(private _sFacturas: FacturasService,
    private _sRouter: Router) { }

  ngOnInit() {
   this.traerFacturas();
  }

  traerFacturas(){
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


  eliminarFactura(id){
    Swal.fire({
      title: 'Estas seguro de Eliminar?',
      text: 'El proceso no tiene vuelta atrás!!!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'No, Cancelar!',
      confirmButtonText: 'Si, borrar'
    }).then((result)=>{
      if (result.value){
        console.log(`Elimando el id ${id}`);
        this._sFacturas.deleteFactura(id).subscribe((rpta)=>{
          
          // si la rsta tiene un id, quiere decir que fue completamente borrado
          if (rpta.id){
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

  abrirModalEditar(id){
    // usamos jquery, typescript no reconoce el signo $ de jquery, show para mostrar hide para ocultar
    $("#modalEditar").modal("show");

  }
}