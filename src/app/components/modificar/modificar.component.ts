import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Serie } from 'src/app/models/Serie';
import { Personaje } from 'src/app/models/Personaje';
import { ServiceSeries } from 'src/app/services/serviceSeries';
import {Router} from "@angular/router"

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit{

  public series!: Array<Serie>
  public personajes!: Array<Personaje>
  @ViewChild ("selectserie") idSerieRef!: ElementRef
  @ViewChild ("selectpersonaje") idPersonajeRef!: ElementRef
  constructor(private _ServiceSeries:ServiceSeries, private _router:Router){}

  ngOnInit(): void {
    this.loadSeries()
    this.loadPersonajes()
  }
  loadSeries(){
    this._ServiceSeries.getSeries().subscribe(response=>{
      this.series = response
      console.log(this.series)
    })
  }

  loadPersonajes(){
    this._ServiceSeries.getPersonajes().subscribe(response=>{
      this.personajes = response
      console.log(this.personajes)
    })
  }

  modificar(): void {
    var idSerie = this.idSerieRef.nativeElement.value;
    var idPersonaje = this.idPersonajeRef.nativeElement.value;
  
    this._ServiceSeries.modificarPersonajes(idPersonaje, idSerie).subscribe(response => {
      this._router.navigate(["/personajes/" + idSerie]);
    });
  }
  
}
