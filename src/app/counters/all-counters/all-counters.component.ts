import {Component, OnDestroy, OnInit} from '@angular/core';
import {Apollo, gql, QueryRef} from "apollo-angular";
import {FindAllCounters, FindModels, GetPopUp} from "../../graphql/graphql.queries";
import {Router} from "@angular/router";
import {DialogCreateCounterComponent} from "../dialog-create-counter/dialog-create-counter.component";
import {MatDialog} from "@angular/material/dialog";
import {DialogCreatePortComponent} from "../dialog-create-port/dialog-create-port.component";


@Component({
  selector: 'app-all-counters',
  templateUrl: './all-counters.component.html',
  styleUrls: ['./all-counters.component.scss']
})
export class AllCountersComponent implements OnInit{
  counters: any[] = [];
  error: any;

  constructor(private apollo: Apollo, private router: Router, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.updateCounters()
  }

  redirectOnCounter(uuid: string): void{
    this.router.navigate(['/counters/' + uuid]);
  }

  openDialogCounter(): void {

    this.apollo.watchQuery({
      query: GetPopUp
    }).valueChanges.subscribe(({ data, error }: any) => {

      const dialogRef = this.dialog.open(DialogCreateCounterComponent, {
        width: '600px',
        height: '500px',
        data: {allBuses: data.getPopUp.buses, allModels: data.getPopUp.models},
      });


      dialogRef.afterClosed().subscribe((res) => {
        this.updateCounters()
      });

    })
  }

  openDialogPort(): void{
    const dialogRef = this.dialog.open(DialogCreatePortComponent, {
      width: '600px',
      height: '500px',
    });
  }

  updateCounters():void{
    this.apollo.watchQuery({
      query: FindAllCounters
    }).valueChanges.subscribe(({ data, error }: any) => {
        this.counters = data.findAllCounters;
        this.error = error;
        if (this.error === null) {
          return this.counters
        }
        else{
          return this.error
        }
      }
    );
  }

}
