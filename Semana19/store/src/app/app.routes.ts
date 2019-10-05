import {RouterModule, Routes} from '@angular/router'; // debemos de importar estos 
import {ListadoComponent} from './listado/listado.component';
import {CarritoComponent} from './carrito/carrito.component';
// paso 1
const RUTAS: Routes=[
    {
        path:'',
        component:ListadoComponent
    },
    {
        path:'carrito',
        component:CarritoComponent
    }
];

export const MISRUTAS=RouterModule.forRoot(RUTAS);