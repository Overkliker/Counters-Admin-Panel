import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountersRoutingModule } from './counters-routing.module';
import { CurrentCounterComponent } from './current-counter/current-counter.component';
import { AllCountersComponent } from './all-counters/all-counters.component';
import { DialogCreateCounterComponent } from './dialog-create-counter/dialog-create-counter.component';
import {MatDialogModule} from "@angular/material/dialog";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatChipsModule} from "@angular/material/chips";
import { DialogCreatePortComponent } from './dialog-create-port/dialog-create-port.component';
import { GetService } from './services/get.service';




@NgModule({
  declarations: [
    CurrentCounterComponent,
    AllCountersComponent,
    DialogCreateCounterComponent,
    DialogCreatePortComponent
  ],
  imports: [
    CommonModule,
    CountersRoutingModule,
    MatDialogModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatChipsModule,
    ReactiveFormsModule,
  ],
  providers: [
    GetService,
  ]
})
export class CountersModule { }
