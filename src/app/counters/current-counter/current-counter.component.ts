import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Apollo} from "apollo-angular";
import {FindCounterById} from "../../graphql/graphql.queries";

@Component({
  selector: 'app-current-counter',
  templateUrl: './current-counter.component.html',
  styleUrls: ['./current-counter.component.scss']
})
export class CurrentCounterComponent implements OnInit{

  public counterId: string = '';
  public counter: any;
  public error: any

  constructor(private route: ActivatedRoute, private apollo: Apollo){}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      return this.counterId = params['uuid'];
    })


    this.apollo.watchQuery({
      query: FindCounterById,
      variables: {
        id: this.counterId,
      }
    }).valueChanges.subscribe(({ data, error }: any) => {
      this.counter = data.findCounterById;
      this.error = error
      if (this.error === null){
        return this.counter
      }
      else{
        return this.error
      }
    })
  }

}
