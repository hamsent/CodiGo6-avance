import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ProductosComponent} from './components/productos/productos.component';


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
    path: 'productos',
    component: ProductosComponent
}
];

export const RUTAS = RouterModule.forRoot(MIS_RUTAS);