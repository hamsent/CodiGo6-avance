import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListadoComponent } from './listado/listado.component';
import { HttpClientModule } from '@angular/common/http';
import { MonedaPipe } from './pipes/moneda.pipe';
import { CambiarmonedaComponent } from './cambiarmoneda/cambiarmoneda.component';
import {FormsModule} from '@angular/forms';
import { MayusculaPipe } from './pipes/mayuscula.pipe';
import { CarritoComponent } from './carrito/carrito.component' //ojo no olvidar
import {MISRUTAS} from './app.routes'; //paso 2

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListadoComponent,
    MonedaPipe,
    CambiarmonedaComponent,
    MayusculaPipe,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, //colocar si o si para que jale los datos en el html
    FormsModule,
    MISRUTAS //paso3
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
