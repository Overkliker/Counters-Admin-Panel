import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Apollo} from "apollo-angular";
import {
  FindAllCounterIds,
  FindByIntervalIndications,
  FindByIntervalConsumptions,
  FindLatestIndication, FindLatestConsumption, FindAllNamedCountersId
} from "../../graphql/graphql.queries";
import {MyIndicationsChartComponent} from "../my-indications-chart/my-indications-chart.component";
import {timestamp} from "rxjs";

@Component({
  selector: 'app-full-info',
  templateUrl: './full-info.component.html',
  styleUrls: ['./full-info.component.scss']
})
export class FullInfoComponent implements OnInit{
  public pointsChart: any;
  public tableData: any;
  public counterIds: any;
  public error: any;
  public btnIndicationsClicked = true;

  private dateStart?: string;
  private dateEnd?: string;
  private currentCounter?: string;
  public lastData?: string;
  public thisMonth?: string;

  public bindingStartDate: Date = new Date();
  public bindingEndDate: Date = new Date();

  constructor(private apollo: Apollo) {
  }

  ngOnInit(): void {
    this.apollo.watchQuery({
      query: FindAllNamedCountersId,
    }).valueChanges.subscribe(({ data, error }: any) => {

        this.counterIds = data.findAllCounters;
        this.error = error;
        console.log(this.counterIds)


      // this.dateStart = this.getCurrentDate() + "T00:00";
      // this.dateEnd = this.getCurrentDate() + "T23:30";

      this.dateStart = "2022-05-01T00:00";
      this.dateEnd = "2022-05-01T23:30";

      this.setCurrentCounter(this.counterIds[0].counter.id)
      this.updateAllData()
    })

  }

  reselectClick(): void{
    this.dateStart = this.bindingStartDate.toString() + 'T00:00';
    this.dateEnd = this.bindingEndDate.toString() + 'T23:30';

    console.log(this.dateStart)
    console.log(this.dateEnd)
    this.updateAllData()
  }

  getCurrentDate(): string{
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    let dateString =  yyyy + '-' +mm + '-' + dd ;
    return dateString
  }

  setTypeData(){
    this.btnIndicationsClicked = !this.btnIndicationsClicked;

    this.updateAllData()
  }

  updatePointsOnIndications(id: string): void{
    console.log(this.currentCounter)
    this.apollo.watchQuery({
      query: FindByIntervalIndications,
      variables: {
        id: id,
        from: this.dateStart,
        to: this.dateEnd
      }
    }).valueChanges.subscribe( ({ data, error }: any) => {
      let list = []

      let newData = []
      for (let i of data.findByIntervalIndications){
        let timestamp = new Date(i.timestamp)
        newData.push(
          [i.timestamp.replace('T', ' ').replace('Z', ' '), i.value]
        )

        list.push(
          {
            x: timestamp,
            y: i.value
          }
        )
      }

      this.tableData = newData
      this.pointsChart = list
      return this.pointsChart
    })
  }

  updatePointsOnConsumptions(id: string): void{
    this.apollo.watchQuery({
      query: FindByIntervalConsumptions,
      variables: {
        id: id,
        from: this.dateStart,
        to: this.dateEnd
      }
    }).valueChanges.subscribe( ({ data, error }: any) => {
      let list = []

      let newData = []
      for (let i of data.findByIntervalConsumptions){
        let timestamp = new Date(i.timestamp)
        newData.push(
          [i.timestamp.replace('T', ' ').replace('Z', ' '), i.value]
        )

        list.push(
          {
            x: timestamp,
            y: i.value
          }
        )
      }

      this.tableData = newData
      this.pointsChart = list
      return this.pointsChart
    })
  }


  selectNewCounter(event: any): void{
    this.currentCounter = event.target.value;

    this.updateAllData()

  }

  updateAllData(): void{
    if (this.btnIndicationsClicked) {
      this.updatePointsOnIndications(this.currentCounter!)
    }
    else{
      this.updatePointsOnConsumptions(this.currentCounter!)
    }
  }

  setCurrentCounter(counter: string): void{
    this.currentCounter = counter
  }

}
