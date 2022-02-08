import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit {

  colors : string[] =  ["#54ECF8", "#4AD9BC", "#5DF0A8"];

  public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350, 450, 100 ], backgroundColor: this.colors, hoverBorderWidth: 15, hoverBackgroundColor:this.colors, hoverBorderColor:'black' },
      { data: [ 50, 150, 120 ], backgroundColor: this.colors, hoverBorderWidth: 15, hoverBackgroundColor:this.colors, hoverBorderColor:'black' },
      { data: [ 250, 130, 70 ], backgroundColor: this.colors, hoverBorderWidth: 15, hoverBackgroundColor:this.colors, hoverBorderColor:'black' }
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';


  constructor(
    private graficaService : GraficasService
  ) { }

  ngOnInit(): void {
    this.getInformacionDona();
  }

  getInformacionDona() {
    this.graficaService.getDataDona().subscribe( dona => {
      console.log(dona);
    })
  }

}
