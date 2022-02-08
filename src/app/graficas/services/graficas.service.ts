import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ChartDataset } from 'chart.js';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  constructor(
    private http: HttpClient
  ) { }

  getDataDona() : Observable<any> {
    return this.http.get<any>('http://localhost:3000/grafica');
  }

  getUsuariosDonaData( ) {
    return this.getDataDona()
    .pipe(
      map( dona => {
        const labels = Object.keys(dona);
        const data : ChartDataset<'doughnut'> = {
          data : Object.values(dona)
        }
        return { labels, data}
      })
    )
  }

}
