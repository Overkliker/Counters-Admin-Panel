import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Apollo} from "apollo-angular";
import {FindByIntervalConsumptions, FindByIntervalIndications, FindCounterById} from "../../graphql/graphql.queries";
import {count, timestamp} from "rxjs";

@Component({
  selector: 'app-current-counter',
  templateUrl: './current-counter.component.html',
  styleUrls: ['./current-counter.component.scss']
})
export class CurrentCounterComponent implements OnInit {

  private dateStart?: string;
  private dateEnd?: string;

  public counterId: string = '';
  public counter: any;
  public error: any;

  private currentPage: number = 0;
  private allPages: number = 0;

  private countElementsOnPage: number = 5;

  public dataValues: any;

  public dataType: boolean = false;

  public bindingStartDate: Date = new Date();
  public bindingEndDate: Date = new Date();

  constructor(private route: ActivatedRoute, private apollo: Apollo) {

    let width = window.innerWidth / 2;

    if (width < 800 && width > 500) {
      this.countElementsOnPage = 9;
    } else if (width < 500) {
      this.countElementsOnPage = 6;
    } else {
      this.countElementsOnPage = 14
    }
  }

  ngOnInit(): void {
    this.counterId = this.route.snapshot.params['uuid'];

    this.dateStart = "2022-05-01T00:00";
    this.dateEnd = "2022-05-01T23:30";

    this.apollo.query({
      query: FindCounterById,
      variables: {
        id: this.counterId,
      }
    }).subscribe(({data, error}: any) => {
      this.counter = data.findCounterById;
      this.error = error
    })

    this.getIndicationsByPeriod();
  }

  getIndicationsByPeriod(): void {
    this.apollo.query({
      query: FindByIntervalIndications,
      variables: {
        id: this.counterId,
        from: this.dateStart,
        to: this.dateEnd
      }
    }).subscribe(({data, error}: any) => {
      let list = [];
      for (let i of data.findByIntervalIndications) {
        let timestamp = i.timestamp.replace('T', ' ').replace('Z', ' ')
        list.push(
          {
            timestamp: timestamp.slice(2, timestamp.length - 1),
            value: i.value
          }
        );
      }

      this.dataValues = list;

    })
  }


  getConsumptionsByPeriod(): void {
    this.apollo.watchQuery({
      query: FindByIntervalConsumptions,
      variables: {
        id: this.counterId,
        from: this.dateStart,
        to: this.dateEnd
      }
    }).valueChanges.subscribe(({data, error}: any) => {
      let list = [];

      for (let i of data.findByIntervalConsumptions) {
        let timestamp = i.timestamp.replace('T', ' ').replace('Z', ' ')
        list.push(
          {
            timestamp: timestamp.slice(2, timestamp.length - 1),
            value: i.value
          }
        );
      }

      this.dataValues = list;

    })
  }

  setTypeData(): void {
    this.dataType = !this.dataType;
    if (!this.dataType) {
      this.getIndicationsByPeriod()
    } else {
      this.getConsumptionsByPeriod()
    }
  }

  reselectClick(): void{
    this.dateStart = this.bindingStartDate.toString() + 'T00:00';
    this.dateEnd = this.bindingEndDate.toString() + 'T23:30';

    this.updateAllData()
  }

  updateAllData(): void{
    if (this.dataType) {
      this.getConsumptionsByPeriod()
    }
    else{
      this.getIndicationsByPeriod()
    }
  }

}
