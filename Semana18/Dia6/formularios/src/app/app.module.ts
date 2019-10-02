import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// importando el modulo http

import {HttpClientModule} from '@angular/common/http' //este es el modulo que hace que se conecte al exterior
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FacturasComponent } from './components/facturas/facturas.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
//TAMBIEN COLOCAR
import{RUTAS} from './app.routes'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FacturasComponent,
    HomeComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    RUTAS,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
