import { Component, OnInit } from '@angular/core';
import { ChartData, ChartDataset, ChartType } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

 

  public doughnutChartLabels: string[] = [ 
    'Download Sales', 'In-Store Sales', 'Mail-Order Sales'
   ];
  public doughnutChartData: ChartData = {
    labels: this.doughnutChartLabels,
    datasets: [
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
    // this.graficaService.getDataDona().subscribe( dona => {
    //   console.log(dona);
    //   const labels = Object.keys(dona);
    //   const data : ChartDataset<'doughnut'> = {
    //     data : Object.values(dona)
    //   }
    //   console.log(labels);
    //   console.log(data);
   
    //   this.doughnutChartData.labels = labels;
    //   this.doughnutChartData.datasets.push(data);
      
      

    // });

    this.graficaService.getUsuariosDonaData().subscribe( x => {
      console.log(x);
      this.doughnutChartData.labels = x.labels;
      this.doughnutChartData.datasets.push(x.data);
    })

  }

}
