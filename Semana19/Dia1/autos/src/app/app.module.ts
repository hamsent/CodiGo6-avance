import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FacturasComponent } from './components/facturas/facturas.component';
import { HomeComponent } from './components/home/home.component';
import { RUTAS } from './app.routes';

import {FormsModule} from '@angular/forms';
// import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FacturasComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RUTAS,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
