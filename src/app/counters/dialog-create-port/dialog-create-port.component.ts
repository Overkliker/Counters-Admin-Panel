import {Component, Inject} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DialogCreateCounterComponent} from "../dialog-create-counter/dialog-create-counter.component";
import {UUID} from "uuid-generator-ts";
import {CreateCounter, CreatePort} from "../../graphql/graphql.queries";
import {Apollo} from "apollo-angular";

@Component({
  selector: 'app-dialog-create-port',
  templateUrl: './dialog-create-port.component.html',
  styleUrls: ['./dialog-create-port.component.scss']
})
export class DialogCreatePortComponent {
  myForm: FormGroup = new FormGroup({
    'Name': new FormControl('', Validators.required),
    'Ip': new FormControl('', Validators.required),
    'Port': new FormControl('', Validators.required),
    'Monitoring': new FormControl('', Validators.required),
    'MaxUnavalible': new FormControl('', Validators.required),
  });

  constructor(public dialogRef: MatDialogRef<DialogCreateCounterComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private apollo: Apollo
              ) {}


  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(): void {
    if (this.myForm.valid) {
      const uuid = new UUID()['str'];

      this.apollo.mutate({
        mutation: CreatePort,
        variables: {
          uuid: uuid,
          ip: this.myForm.value.Ip,
          port: +this.myForm.value.Port,
          monitoring: +this.myForm.value.Monitoring,
          maxUnavalible: +this.myForm.value.MaxUnavalible,
          name: this.myForm.value.Name
        }
      }).subscribe()

      this.dialogRef.close();
    }
  }
}
