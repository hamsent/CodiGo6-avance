import { Component, OnInit, OnDestroy } from '@angular/core';
import { FacturasService } from 'src/app/services/facturas.service';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';

import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-factura',
  templateUrl: './crear-factura.component.html',
  styleUrls: ['./crear-factura.component.css']
})
export class CrearFacturaComponent implements OnInit, OnDestroy {
  subscriptor: Subscription;

  objFactura = {
    fact_nro: '',
    fact_rz: '',
    fact_fech: '',
    fact_ruc: '',
    fact_action: ''
  }

  constructor(private _sFactura: FacturasService,
    private _sRouter: Router) { }

  ngOnInit() {
  }
  crearFactura() {

    Swal.fire({
      title: 'Espere un momento',
      text: 'Estamos registrando la factura',
      type: 'info',
      allowOutsideClick: false,
      showConfirmButton: false
    })
    //  console.log(this.objFactura);
    this._sFactura.postFacturas(this.objFactura).subscribe((rpta) => {
      // console.log(rpta);
      if (rpta.id) {
        Swal.fire({
          title: 'Exito!!!',
          type: 'success',
          text: 'La factura ha sido creda con éxito!!',
          confirmButtonText: 'Ir a facturas',
          allowOutsideClick:false
          // ponemos lo anterior para que el usuario no haga click fuera del alert 
        }).then((result) => {
          if (result.value) {
            this._sRouter.navigate(['facturas']);
          }
        })
      }


    })
  }

  ngOnDestroy() {
    try {
      this.subscriptor.unsubscribe();
    } catch (error) {

    }

  }
}
