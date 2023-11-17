import { Component, OnInit } from '@angular/core';
import { ServiceSeries } from 'src/app/services/serviceSeries';
import { Serie } from 'src/app/models/Serie';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
  public series!: Array<Serie>

  constructor(private _ServiceSeries: ServiceSeries){}

  ngOnInit(): void {
    this._ServiceSeries.getSeries().subscribe(response =>{
      this.series = response
      console.log(this.series)
    })
  }
}
