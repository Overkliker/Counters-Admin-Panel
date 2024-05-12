import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AllCountersComponent} from "./all-counters/all-counters.component";
import {CurrentCounterComponent} from "./current-counter/current-counter.component";

const routes: Routes = [
  {
    path: '',
    component: AllCountersComponent
  },
  {
    path: ':uuid',
    component: CurrentCounterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountersRoutingModule { }
