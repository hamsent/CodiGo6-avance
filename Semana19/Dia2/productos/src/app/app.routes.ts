import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ProductosComponent} from './components/productos/productos.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';


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
},
{
    path: 'productos/crear',
    component: CrearProductoComponent
}
];

export const RUTAS = RouterModule.forRoot(MIS_RUTAS);