import { Routes,RouterModule } from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import { HomeComponent } from "./components/home/home.component";
import { DetalleComponent } from "./components/detalle/detalle.component";
import { PersonajesComponent } from "./components/personajes/personajes.component";
import { InsertComponent } from "./components/insert/insert.component";
import { ModificarComponent } from "./components/modificar/modificar.component";

const appRoutes : Routes  =[
    {path : "", component: HomeComponent},
    {path : "detalle/:id", component: DetalleComponent},
    {path : "personajes/:id", component: PersonajesComponent},
    {path : "insert", component: InsertComponent},
    {path : "modificar", component: ModificarComponent},


]

export const appRoutingProvider : any[] = [];
export const routing : ModuleWithProviders<any>= RouterModule.forRoot(appRoutes)