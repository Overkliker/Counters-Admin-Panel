import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FullInfoComponent} from "./full-info/full-info.component";

const routes: Routes = [
  {
    path: '',
    component: FullInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatisticRoutingModule { }
