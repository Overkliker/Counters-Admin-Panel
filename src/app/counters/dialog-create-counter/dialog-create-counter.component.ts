import {Component, Inject, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Dialog} from "@angular/cdk/dialog";
import {UUID} from 'uuid-generator-ts';
import {
  MatDialogRef,
  MatDialogModule,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import {Apollo} from "apollo-angular";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CreateCounter} from "../../graphql/graphql.queries";
import { GetService } from '../services/get.service';


@Component({
  selector: 'app-dialog-create-counter',
  templateUrl: './dialog-create-counter.component.html',
  styleUrls: ['./dialog-create-counter.component.scss'],
})


export class DialogCreateCounterComponent{
  public myForm: FormGroup = new FormGroup({
    'Name': new FormControl('', Validators.required),
    'Password': new FormControl('', Validators.required),
    'Number': new FormControl('', Validators.required),
    'Serial': new FormControl('', Validators.required),
    'TransformRation': new FormControl('', Validators.required),
  });

  private currentModel!: String;
  private currentPort!: String;
  private currentModelName!: String;

  public textOfresponse?: String;
  private uuid!: String;

  constructor(
    public dialogRef: MatDialogRef<DialogCreateCounterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private apollo: Apollo,
    private pingService: GetService,
  ) {
    this.currentPort = data.allBuses[0].id;
    this.currentModel = data.allModels[0].id;
    this.currentModelName = data.allModels[0].name

    this.uuid = new UUID()['str'];
  }


  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(): void {

    if (this.myForm.valid) {

      this.apollo.mutate({
        mutation: CreateCounter,
        variables: {
          uuid: this.uuid,
          number: this.myForm.value.Number,
          password: this.myForm.value.Password,
          transformRation: +this.myForm.value.TransformRation,
          serial: this.myForm.value.Serial,
          modelId: this.currentModel,
          busId: this.currentPort,
          name: this.myForm.value.Name
        }
      }).subscribe()

      this.dialogRef.close();
    }
  }


  selectNewPort(event: any): void{
    this.currentPort = event.target.value
  }

  selectNewModel(event: any): void{
    this.currentModel = event.target.value
    this.currentModelName = event.target.options[event.target.selectedIndex].text

    console.log(this.currentModelName)
  }

  pingClick(){
    if (this.myForm.valid){
      console.log('res')
      this.pingService.getPingForCounter(
        this.currentPort,
        this.uuid,
        this.myForm.value.Number,
        this.myForm.value.Password,
        this.currentModelName
       ).subscribe(
        res => {
          try{
            this.textOfresponse = `a plus: ${res.energyCounters[0].data[0].aplus} ---- r plus: ${res.energyCounters[0].data[0].rplus}`
          }catch{
            this.textOfresponse = "Ошибка обращения к устройству!"
          }
            
        

        }
       )
    }
    else{
      this.textOfresponse = "Форма не заполнена!"
    }
  }
}
