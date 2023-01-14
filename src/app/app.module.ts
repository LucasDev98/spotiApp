import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { InstruccionesComponent } from './components/instrucciones/instrucciones.component';
import { NoImagePipe } from './pipes/no-image.pipe';
import { TarjetaComponent } from './components/shared/tarjeta/tarjeta.component';
import { SpinnerComponent } from './components/shared/spinner/spinner.component';
import { DomSeguroPipe } from './pipes/dom-seguro.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    InstruccionesComponent,
    NoImagePipe,
    TarjetaComponent,
    SpinnerComponent,
    DomSeguroPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
