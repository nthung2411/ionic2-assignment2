import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: "app-reset",
    template: `
        <ion-row>
            <ion-col col-4><button ion-button color="danger" block small (click)="onReset('all')">Reset All</button></ion-col>
            <ion-col col-4><button ion-button color="danger" block small (click)="onReset('tap')">Reset "Taps"</button></ion-col>
            <ion-col col-4><button ion-button color="danger" block small (click)="onReset('press')">Reset "Presses"</button></ion-col>
        </ion-row>
            `
})

export class ResetComponent{
  @Output() didReset = new EventEmitter<string>();

  onReset(type:string){
    this.didReset.emit(type);
  }    
}