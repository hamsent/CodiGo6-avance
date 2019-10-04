//creamos para enrutar
import { RouterModule, Routes } from '@angular/router' //para importar
import { HomeComponent } from './components/home/home.component'
import { FacturasComponent } from './components/facturas/facturas.component'
import { ErrorComponent } from './components/error/error.component'
import { CrearFacturaComponent } from './components/crear-factura/crear-factura.component';
import { VerFacturaComponent } from './components/ver-factura/ver-factura.component';


const MIS_RUTAS: Routes = [
    //cada ruta es un objeto
    // /cada objeto tienen que tener dos elementos
    {
        // se coloca sin nombre para enrutar por defecto este componente
        path: '',
        component: HomeComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'facturas',
        component: FacturasComponent
    },
    {
        path: 'facturas/crear',
        component: CrearFacturaComponent
    },
    {
        path: 'facturas/:id',
        component: VerFacturaComponent
    },
    {
        path: '**',
        component: ErrorComponent
    }
];

export const RUTAS = RouterModule.forRoot(MIS_RUTAS);