import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import { StatisticRoutingModule } from './statistic-routing.module';
import { MyIndicationsChartComponent } from './my-indications-chart/my-indications-chart.component';
import { FullInfoComponent } from './full-info/full-info.component';
import { ForMounthConsumptionComponent } from './for-mounth-consumption/for-mounth-consumption.component';
import { OnNextMounthComponent } from './on-next-mounth/on-next-mounth.component';
import {CanvasJSAngularChartsModule} from "@canvasjs/angular-charts";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    MyIndicationsChartComponent,
    FullInfoComponent,
    ForMounthConsumptionComponent,
    OnNextMounthComponent
  ],
  imports: [
    CommonModule,
    StatisticRoutingModule,
    NgOptimizedImage,
    CanvasJSAngularChartsModule,
    MatDatepickerModule,
    FormsModule,
  ]
})
export class StatisticModule { }
