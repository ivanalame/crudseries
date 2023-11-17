import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { ServiceSeries } from 'src/app/services/serviceSeries';
import { Personaje } from 'src/app/models/Personaje';
import {Router} from "@angular/router"
import { Serie } from 'src/app/models/Serie';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit{
  @ViewChild("cajanombre") cajaNombreRef!: ElementRef
  @ViewChild("cajaimagen") cajaimagenRef!: ElementRef
  @ViewChild("selectseries") selectseriesRef!: ElementRef
  public series!: Array<Serie>
  
  constructor(private _ServiceSeries: ServiceSeries,
      private _router:Router){}

      ngOnInit(): void {
        this._ServiceSeries.getSeries().subscribe(response =>{
          this.series = response
          console.log(this.series)
        })
      }

      insertarPersonajes():void{
        var id = 1000
        var nombre = this.cajaNombreRef.nativeElement.value;
        var imagen = this.cajaimagenRef.nativeElement.value
        var idSerie = parseInt( this.selectseriesRef.nativeElement.value)
        
        var newPersonaje = new Personaje(id,nombre,imagen,idSerie)

        console.log(newPersonaje)
        this._ServiceSeries.insertarPersonaje(newPersonaje).subscribe(response=>{
          this._router.navigate(["/personajes/"+idSerie])
        })
      }

      
}
