import { Component, OnInit } from '@angular/core';
import { ChartData } from 'chart.js';


@Component({
  selector: 'app-barras-doble',
  templateUrl: './barras-doble.component.html',
  styles: [
  ]
})
export class BarrasDobleComponent implements OnInit {



  public productoData: ChartData = {
    labels: ['2021', '2022','2023','2024','2025'],
    datasets: [
      { data: [ 200, 300,400,300, 100 ], label: 'Carros' },
     
    ]
  }

  public proveedoresData: ChartData = {
    labels: ['2021', '2022','2023','2024','2025'],
    datasets: [
      { data: [ 100,200,300,400,500 ], label: 'Vendedor A' },
      { data: [ 50,250,30, 450,200 ], label: 'Vendedor B' },
    ]
  }

  constructor() { }

  ngOnInit(): void {
  }

}
