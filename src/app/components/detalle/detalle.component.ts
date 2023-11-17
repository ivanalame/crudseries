import { Component, OnInit } from '@angular/core';
import { ServiceSeries } from 'src/app/services/serviceSeries';
import { Serie } from 'src/app/models/Serie';
import {Router,Params, ActivatedRoute} from "@angular/router" 


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  public idSerie!: number
  public serie!: Serie
  constructor(private _ServiceSeries : ServiceSeries,  private _activeRoute:ActivatedRoute){}

  ngOnInit(): void {
    this._activeRoute.params.subscribe((parametros:Params)=>{
      var id = parseInt(parametros['id'])
      this.idSerie=id
    })

    this._ServiceSeries.detalleSerie(this.idSerie).subscribe(response=>{
      this.serie=response
      console.log(this.serie)
    })
  }


}
