import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListadoComponent } from './listado/listado.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListadoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule //colocar si o si para que jale los datos en el html
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
