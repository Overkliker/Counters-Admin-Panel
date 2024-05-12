import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ErrorComponent} from "./components-navigation/error/error.component";
import {AppComponent} from "./app.component";

const routes: Routes = [
  {
    path: 'statistic',
    loadChildren: () => import('./statistic/statistic.module').then(m => m.StatisticModule)
  },
  {
    path: '',
    redirectTo: 'statistic',
    pathMatch: 'full',
  },
  {
    path: 'counters',
    loadChildren: () => import('./counters/counters.module').then(m => m.CountersModule)
  },
  {
    path: '**',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
