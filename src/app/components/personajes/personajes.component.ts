import { Component, OnInit } from '@angular/core';
import { ServiceSeries } from 'src/app/services/serviceSeries';
import { Personaje } from 'src/app/models/Personaje';
import {Router,Params, ActivatedRoute} from "@angular/router" 

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  public personajes!: Array<Personaje>
  public idSerie!: number
  constructor(private _ServiceSeries : ServiceSeries,  private _activeRoute:ActivatedRoute){}


  ngOnInit(): void {

    this._activeRoute.params.subscribe((parametros:Params)=>{
      var id = parseInt(parametros['id'])
      this.idSerie=id
    })
    this._ServiceSeries.personajesSerie(this.idSerie).subscribe(response=>{
      this.personajes = response
      console.log(this.personajes)
    })
  }
}
