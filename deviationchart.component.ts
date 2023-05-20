import { Component } from '@angular/core';
 import * as Highcharts from 'highcharts/highcharts';
 import Bellcurve from 'highcharts/modules/histogram-bellcurve';
 Bellcurve(Highcharts);


@Component({
  selector: 'app-deviationchart',
  templateUrl: './deviationchart.component.html',
  styleUrls: ['./deviationchart.component.css']
})
export class DeviationchartComponent {
   title = 'myHighChartsApp';
   Highcharts: typeof Highcharts = Highcharts;
   chartOptions: Highcharts.Options = {
     title: {
       text: 'Sample Count by Range'

     },
     xAxis: {
       min: 0,
       max: 4,
       tickInterval: 1
     },
     series: [{
       type: 'histogram',
       baseSeries: 's1',
       zIndex: -1,
       binsNumber: 5,
       color: 'transparent',
       borderWidth: 2,
       borderColor: 'green'
     }, {
       type: 'scatter',
       data: [0.17, 0.17, 0.18, 0.22, 0.26, 0.67, 0.98, 2.80, 2.92, 3.30],
       id: 's1',
       visible: false,
       showInLegend: false

     }]
   }
 }
