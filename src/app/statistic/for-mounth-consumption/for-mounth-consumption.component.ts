import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-for-mounth-consumption',
  templateUrl: './for-mounth-consumption.component.html',
  styleUrls: ['./for-mounth-consumption.component.scss']
})
export class ForMounthConsumptionComponent {
  @Input() text!: string;
  @Input() indications!: string;
}
