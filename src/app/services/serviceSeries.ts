import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";     

import { Personaje } from "../models/Personaje";

@Injectable()
export class ServiceSeries {
    constructor(private _http: HttpClient){}

    getSeries():Observable<any>{
        var request = "api/series"
        var url = environment.urlApiSeries+request
        return  this._http.get(url)
    }

    detalleSerie(id:any):Observable<any>{

        var request = "api/series/"+id
        var url = environment.urlApiSeries+request
        return  this._http.get(url)
    }

    personajesSerie(id: any):Observable<any>{
        var request = "/api/Series/PersonajesSerie/"+id
        var url = environment.urlApiSeries+request
        return  this._http.get(url)
    }

    insertarPersonaje(personaje:Personaje):Observable<any>{
        var json = JSON.stringify(personaje)

        var header = new HttpHeaders().set("Content-type", "application/json");

        var request = "api/personajes"
        var url = environment.urlApiSeries+request
        return  this._http.post(url,json,{headers:header})
    }

    getPersonajes():Observable<any>{
        var request = "api/personajes"
        var url = environment.urlApiSeries+request
        return  this._http.get(url)
    }

    modificarPersonajes(idP:number , idS:number,):Observable<any>{

        
        var header = new HttpHeaders().set("Content-type", "application/json");

        var request = "api/personajes/"+idP+"/"+idS
        var url = environment.urlApiSeries+request
        return  this._http.put(url,{headers:header})
    }
}