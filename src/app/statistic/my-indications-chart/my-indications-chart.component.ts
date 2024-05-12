import {AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {CanvasJSChart} from "@canvasjs/angular-charts";


@Component({
  selector: 'app-my-indications-chart',
  templateUrl: './my-indications-chart.component.html',
  styleUrls: ['./my-indications-chart.component.scss']
})
export class MyIndicationsChartComponent implements OnChanges, OnInit {
  @Input() points?: [any];
  width?: number;
  height?: number;
  chartOptions!: any;
  chart: any;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['points'].currentValue !== undefined) {
      this.chartOptions.data[0].dataPoints = this.points;
      this.chart.render();
    }
  }

  getChartInstance(chart: object): void{
    this.chart = chart
  }

  ngOnInit(): void {
    this.chartOptions = {
      animationEnabled: true,
      data: [{
        lineColor: '#FFFFFF',
        lineWidth: 10,
        type: "splineArea",
        dataPoints: this.points
      }]
    }

  }
}
