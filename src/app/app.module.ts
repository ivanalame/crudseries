import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { routing,appRoutingProvider } from './app.routing';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';

import { ServiceSeries } from './services/serviceSeries';
import { DetalleComponent } from './components/detalle/detalle.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { InsertComponent } from './components/insert/insert.component';
import { ModificarComponent } from './components/modificar/modificar.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    DetalleComponent,
    PersonajesComponent,
    InsertComponent,
    ModificarComponent
  ],
  imports: [
    BrowserModule,routing,FormsModule,HttpClientModule
  ],
  providers: [appRoutingProvider,ServiceSeries],
  bootstrap: [AppComponent]
})
export class AppModule { }
