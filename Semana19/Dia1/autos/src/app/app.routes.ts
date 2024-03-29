import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FacturasComponent } from './components/facturas/facturas.component';



const MIS_RUTAS: Routes = [
    {
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
    }

];

export const RUTAS = RouterModule.forRoot(MIS_RUTAS);