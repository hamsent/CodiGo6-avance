import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProductosComponent } from './components/productos/productos.component';
import { RUTAS } from './app.routes';
import { FormsModule } from '@angular/forms';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { LoginComponent } from './components/login/login.component';

// modulos para inicio de sesión con redes sociales
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";
 
 
let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("1067081943096-bomfief0ogks9nu9fjc1tcttec5llc6l.apps.googleusercontent.com")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("476084866329666")
  }
]);

export function provideConfig() {
  return config;
}
 

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductosComponent,
    CrearProductoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RUTAS,
    HttpClientModule,
    FormsModule,
    SocialLoginModule

  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
